// set.rs
// backend write api

use super::Backend;
use crate::models::*;
use anyhow::Result;
use rand::{seq::SliceRandom, rng};
use std::process::{Command, Stdio};

impl Backend {
    // --- play/pause ---
    /// plays or pauses the current track depending on current state
    ///
    /// # arguments
    /// - none
    /// 
    /// # returns
    /// - none
    pub fn playpause(&mut self) -> Result<()> {
        if self.state.player.isplaying {
            self.pause()?;
        } else {
            self.unpause()?;
        }
        Ok(())
    }

    /// unpauses the current track in the queue
    /// 
    /// # arguments
    /// - none
    /// 
    /// # returns
    /// - none
    fn unpause(&mut self) -> Result<()> {
        let echooutput = Command::new("echo")
            .arg(r#"{"command": ["cycle", "pause"]}"#)
            .stdout(Stdio::piped())
            .spawn()?;
        
        if let Some(echoout) = echooutput.stdout {
            let socatout = Command::new("socat")
                .arg("-")
                .arg("/tmp/mpvlayer")
                .stdin(Stdio::from(echoout)) 
                .stdout(Stdio::null()) 
                .stderr(Stdio::piped()) 
                .output()?;
            if !socatout.status.success() {
                let stderr = String::from_utf8_lossy(&socatout.stderr);
                eprintln!("failed to send pause command to mpv: {}", stderr);
            }
        } else {
            eprintln!("failed to get stdout from echo command");
        }
        self.state.player.isplaying = false;
        Ok(())
    }

    /// pauses playback
    /// sends a pause command to mpv using sockets 
    ///
    /// # arguments
    /// - none
    ///
    /// # returns
    /// - none
    fn pause(&mut self) -> Result<()> {
        let echooutput = Command::new("echo")
            .arg(r#"{"command": ["cycle", "pause"]}"#)
            .stdout(Stdio::piped())
            .spawn()?;
        
        if let Some(echoout) = echooutput.stdout {
            let socatout = Command::new("socat")
                .arg("-")
                .arg("/tmp/mpvlayer")
                .stdin(Stdio::from(echoout)) 
                .stdout(Stdio::null()) 
                .stderr(Stdio::piped()) 
                .output()?;
            if !socatout.status.success() {
                let stderr = String::from_utf8_lossy(&socatout.stderr);
                eprintln!("failed to send pause command to mpv: {}", stderr);
            }
        } else {
            eprintln!("failed to get stdout from echo command");
        }
        self.state.player.isplaying = false;
        Ok(())
    }

    /// plays next track in queue
    ///
    /// # arguments
    /// - none
    ///
    /// # returns
    /// - none
    pub fn next(&mut self) -> Result<()> {
        if let Some(track) = self.state.player.queuestate.queue.get(0).cloned() {
            self.state.player.queuestate.history.push(track);
            self.state.player.queuestate.queue.remove(0);
            self.handlerepeat()?;
        }
        Ok(())
    }

    /// plays previous track (last track in history)
    ///
    /// # arguments
    /// - none
    ///
    /// # returns
    /// - none
    pub fn prev(&mut self) -> Result<()> {
        if let Some(track) = self.state.player.queuestate.history.pop() {
            self.state.player.queuestate.queue.insert(0, track);
        }
        self.playsong()?;
        Ok(())
    }

    /// toggles shuffle
    ///
    /// # arguments
    /// - none
    ///
    /// # returns
    /// - none
    pub fn toggleshuffle(&mut self) {
        self.state.player.shufflestate.shuffle = !self.state.player.shufflestate.shuffle;
        self.shufflequeue();
    }

    fn shufflequeue(&mut self) {
        if self.state.player.shufflestate.shuffle && self.state.player.queuestate.queue.len() > 1 {
            if self.state.player.shufflestate.originalqueue.is_empty() {
                self.state.player.shufflestate.originalqueue = self.state.player.queuestate.queue.clone();
            }
            
            let current = self.state.player.queuestate.queue.remove(0);
            
            self.state.player.queuestate.queue.shuffle(&mut rng());
            
            self.state.player.queuestate.queue.insert(0, current);
        } else if !self.state.player.shufflestate.shuffle {
            if !self.state.player.shufflestate.originalqueue.is_empty() {
                self.state.player.queuestate.queue = self.state.player.shufflestate.originalqueue.clone();
                self.state.player.shufflestate.originalqueue.clear();
            }
        }
    }

    /// cycles through repeat modes
    /// None -> One -> All -> None
    ///
    /// # arguments
    /// - none
    ///
    /// # returns
    /// - none
    pub fn cyclerepeat(&mut self) {
        self.state.player.repeatstate.repeatmode = match self.state.player.repeatstate.repeatmode {
            RepeatMode::None => RepeatMode::One,
            RepeatMode::One => RepeatMode::All,
            RepeatMode::All => RepeatMode::None
        };
    }

    fn handlerepeat(&mut self) -> Result<()> {
        if self.state.player.queuestate.queue.is_empty() {
            match self.state.player.repeatstate.repeatmode {
                RepeatMode::None => {
                    // do nothing
                },
                RepeatMode::One => {
                    // if we just played a track, put it back in the queue
                    if let Some(last_track) = self.state.player.queuestate.history.last().cloned() {
                        self.state.player.queuestate.queue.insert(0, last_track);
                        self.playsong()?;
                    }
                },
                RepeatMode::All => {
                    // move all history back to queue and start again
                    let mut history = Vec::new();
                    std::mem::swap(&mut history, &mut self.state.player.queuestate.history);
                    history.reverse(); // To maintain original order
                    self.state.player.queuestate.queue = history;
                    if !self.state.player.queuestate.queue.is_empty() {
                        self.playsong()?;
                    }
                }
            }
        }
        Ok(())
    }

    // ---queue and playlist management ---

    /// sets the playback queue
    ///
    /// # arguments
    /// - tracks (Vec<Track>): tracks to set as queue
    /// - clearhistory (bool): whether to clear the playback history
    ///
    /// # returns
    /// - none
    pub fn setqueue(&mut self, tracks: Vec<Track>, clearhistory: bool) {
        self.state.player.queuestate.queue = tracks;
        if clearhistory {
            self.state.player.queuestate.history.clear();
        }
    }

    /// adds a song to the end of the queue
    ///
    /// # arguments
    /// - track (Track): track to add
    ///
    /// # returns
    /// - none
    pub fn addtoqueue(&mut self, track: Track) {
        self.state.player.queuestate.queue.push(track);
    }

    /// adds a song to the start of the queue
    ///
    /// # arguments
    /// - track (Track): track to add
    ///
    /// # returns
    /// - none
    pub fn playnext(&mut self, track: Track) {
        self.state.player.queuestate.queue.insert(0, track);
    }

    pub fn playtrackfromqueue(&mut self, index: usize) -> Result<()> {
        if let Some(track) = self.state.player.queuestate.queue.get(index).cloned() {
            self.state.player.queuestate.history.push(track);
            self.state.player.queuestate.queue.remove(index);
        }
        self.playsong()?;
        Ok(())
    }

    pub fn addplaylist(&mut self, playlist: Playlist) {
        self.state.playlists.push(playlist)
    }

    /// selects playlist
    ///
    /// # arguments
    /// - index (usize): index to select
    ///
    /// # returns
    /// - none
    pub fn selectplaylist(&mut self, index: usize) -> Result<()> {
        if index <= self.state.playlists.len() {
            self.selection.selectedplaylist = Some(index);
        } else if !self.state.playlists.is_empty() { 
            self.selection.selectedplaylist = Some(self.state.playlists.len());
        } else {
            self.selection.selectedplaylist = None;
        }
        Ok(())
    }

    fn playsong(&mut self) -> Result<()> {
        if self.state.player.queuestate.queue.is_empty() {
            return Ok(());
        }
        
        let currenturl = &self.state.player.queuestate.queue[0].url;
        
        if let Some(mut process) = self.mpvprocess.take() {
            let _ = process.kill();
        }
        
        self.mpvprocess = Some(Command::new("mpv")
            .arg(currenturl)
            .arg("--input-ipc-server=/tmp/mpvlayer")
            .arg("--no-video")
            .arg("--no-terminal")
            .stdout(Stdio::null())
            .stderr(Stdio::null())
            .spawn()?);
        
        self.state.player.isplaying = true;
        Ok(())
    }

    // --- navigation ---

    /// selects the next column, stops at queue
    /// playlists > tracks > queue > queue
    ///
    /// # arguments
    /// - none
    ///
    /// # returns
    /// - none
    pub fn nextcolumn(&mut self) {
        self.selection.selectedcolumn = match self.selection.selectedcolumn {
            CurrentColumn::Playlists => CurrentColumn::Tracks,
            CurrentColumn::Tracks => CurrentColumn::Queue,
            CurrentColumn::Queue => CurrentColumn::Queue,
        };
    }

    /// selects the previous column, stops at playlists
    /// playlists < playlists < tracks < queue
    ///
    /// # arguments
    /// - none
    ///
    /// # returns
    /// - none
    pub fn prevcolumn(&mut self) {
        self.selection.selectedcolumn = match self.selection.selectedcolumn {
            CurrentColumn::Playlists => CurrentColumn::Playlists,
            CurrentColumn::Tracks => CurrentColumn::Playlists,
            CurrentColumn::Queue => CurrentColumn::Tracks,
        };
    }

    /// selects the next row, stops at the last one
    pub fn nextrow(&mut self) {
        match self.selection.selectedcolumn {
            CurrentColumn::Playlists => {
                let current = self.selection.selectedplaylist.unwrap_or(0);
                let numberofplaylists = self.state.playlists.len();
                let next = if current + 1 >= numberofplaylists {
                    numberofplaylists // change to 0 to cycle
                } else {
                    current + 1
                };
                self.selection.selectedplaylist = Some(next);
            },
            CurrentColumn::Tracks => {
                if let Some(playlistidx) = self.selection.selectedplaylist {
                    if let Some(playlist) = self.state.playlists.get(playlistidx) {
                        let current = self.selection.selectedtrack.unwrap_or(0);
                        let numberoftracks = playlist.tracks.len();
                        let next = if current + 1 >= numberoftracks {
                            numberoftracks // change to 0 to cycle
                        } else {
                            current + 1
                        };
                        self.selection.selectedtrack = Some(next);
                    }
                }
            },
            CurrentColumn::Queue => {
                let current = self.selection.selectedtrack.unwrap_or(0);
                let queuelength = self.state.player.queuestate.queue.len();
                let next = if current >= queuelength - 1 {
                    queuelength // change to 0 to cycle
                } else {
                    current + 1
                };
                self.selection.selectedtrack = Some(next);
            }
        }
    }

    pub fn prevrow(&mut self) {
        match self.selection.selectedcolumn {
            CurrentColumn::Playlists => {
                let current = self.selection.selectedplaylist.unwrap_or(0);
                let next = if current <= 0 {
                    0
                } else {
                    current - 1
                };
                self.selection.selectedplaylist = Some(next);
            },
            CurrentColumn::Tracks => {
                if let Some(playlistidx) = self.selection.selectedplaylist {
                    if let Some(playlist) = self.state.playlists.get(playlistidx) {
                        let current = self.selection.selectedtrack.unwrap_or(0);
                        let next = if current <= 0 {
                            0
                        } else {
                            current - 1
                        };
                        self.selection.selectedtrack = Some(next);
                    }
                }
            },
            CurrentColumn::Queue => {
                let current = self.selection.selectedtrack.unwrap_or(0);
                let next = if current <= 0 {
                    0
                } else {
                    current - 1
                };
                self.selection.selectedtrack = Some(next);
            }
        }
    }
}