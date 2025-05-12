// set.rs
// backend write api

use super::Backend;
use crate::models::{CurrentColumn, MPVSOCKET, Playlist, RepeatMode, Track};
use anyhow::Result;
use rand::{seq::SliceRandom, rng};
use std::process::{Command, Stdio};

// static reference to hold the backend instance
static mut BACKEND: Option<Backend> = None;

// --- play/pause ---
pub fn playpause(backend: &mut Backend) -> Result<()> {
    if backend.state.player.isplaying {
        pause(backend)?;
    } else {
        unpause(backend)?;
    }
    Ok(())
}

fn unpause(backend: &mut Backend) -> Result<()> {
    let echooutput = Command::new("echo")
        .arg(r#"{"command": ["cycle", "pause"]}"#)
        .stdout(Stdio::piped())
        .spawn()?;
    
    if let Some(echoout) = echooutput.stdout {
        let socatout = Command::new("socat")
            .arg("-")
            .arg(MPVSOCKET)
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
    backend.state.player.isplaying = true;
    Ok(())
}

fn pause(backend: &mut Backend) -> Result<()> {
    let echooutput = Command::new("echo")
        .arg(r#"{"command": ["cycle", "pause"]}"#)
        .stdout(Stdio::piped())
        .spawn()?;
    
    if let Some(echoout) = echooutput.stdout {
        let socatout = Command::new("socat")
            .arg("-")
            .arg(MPVSOCKET)
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
    backend.state.player.isplaying = false;
    Ok(())
}

pub fn next(backend: &mut Backend) -> Result<()> {
    if let Some(track) = backend.state.player.queuestate.queue.get(0).cloned() {
        backend.state.player.queuestate.history.push(track);
        backend.state.player.queuestate.queue.remove(0);
        handlerepeat()?;
    }
    Ok(())
}

pub fn prev(backend: &mut Backend) -> Result<()> {
    if let Some(track) = backend.state.player.queuestate.history.pop() {
        backend.state.player.queuestate.queue.insert(0, track);
    }
    playsong()?;
    Ok(())
}

pub fn toggleshuffle(backend: &mut Backend) {
    backend.state.player.shufflestate.shuffle = !backend.state.player.shufflestate.shuffle;
    shufflequeue(backend);
}

fn shufflequeue(backend: &mut Backend) {
    if backend.state.player.shufflestate.shuffle && backend.state.player.queuestate.queue.len() > 1 {
        if backend.state.player.shufflestate.originalqueue.is_empty() {
            backend.state.player.shufflestate.originalqueue = backend.state.player.queuestate.queue.clone();
        }
        
        let current = backend.state.player.queuestate.queue.remove(0);
        
        backend.state.player.queuestate.queue.shuffle(&mut rng());
        
        backend.state.player.queuestate.queue.insert(0, current);
    } else if !backend.state.player.shufflestate.shuffle {
        if !backend.state.player.shufflestate.originalqueue.is_empty() {
            backend.state.player.queuestate.queue = backend.state.player.shufflestate.originalqueue.clone();
            backend.state.player.shufflestate.originalqueue.clear();
        }
    }
}

pub fn cyclerepeat() {
    let backend = mutbackend();
    backend.state.player.repeatstate.repeatmode = match backend.state.player.repeatstate.repeatmode {
        RepeatMode::None => RepeatMode::One,
        RepeatMode::One => RepeatMode::All,
        RepeatMode::All => RepeatMode::None
    };
}

fn handlerepeat() -> Result<()> {
    let backend = mutbackend();
    if backend.state.player.queuestate.queue.is_empty() {
        match backend.state.player.repeatstate.repeatmode {
            RepeatMode::None => {
                // do nothing
            },
            RepeatMode::One => {
                if let Some(last_track) = backend.state.player.queuestate.history.last().cloned() {
                    backend.state.player.queuestate.queue.insert(0, last_track);
                    playsong()?;
                }
            },
            RepeatMode::All => {
                let mut history = Vec::new();
                std::mem::swap(&mut history, &mut backend.state.player.queuestate.history);
                history.reverse();
                backend.state.player.queuestate.queue = history;
                if !backend.state.player.queuestate.queue.is_empty() {
                    playsong()?;
                }
            }
        }
    }
    Ok(())
}

// ---queue and playlist management ---

pub fn setqueue(tracks: Vec<Track>, clearhistory: bool) {
    let backend = mutbackend();
    backend.state.player.queuestate.queue = tracks;
    if clearhistory {
        backend.state.player.queuestate.history.clear();
    }
}

pub fn addtoqueue(track: Track) {
    let backend = mutbackend();
    backend.state.player.queuestate.queue.push(track);
}

pub fn playnext(track: Track) {
    let backend = mutbackend();
    backend.state.player.queuestate.queue.insert(0, track);
}

pub fn playtrackfromqueue(index: usize) -> Result<()> {
    let backend = mutbackend();
    if let Some(track) = backend.state.player.queuestate.queue.get(index).cloned() {
        backend.state.player.queuestate.history.push(track);
        backend.state.player.queuestate.queue.remove(index);
    }
    playsong()?;
    Ok(())
}

pub fn addplaylist(playlist: Playlist) {
    let backend = mutbackend();
    backend.state.playlists.push(playlist);
}

pub fn selectplaylist(index: usize) -> Result<()> {
    let backend = mutbackend();
    if index <= backend.state.playlists.len() {
        backend.selection.selectedplaylist = Some(index);
    } else if !backend.state.playlists.is_empty() { 
        backend.selection.selectedplaylist = Some(backend.state.playlists.len());
    } else {
        backend.selection.selectedplaylist = None;
    }
    Ok(())
}

fn playsong() -> Result<()> {
    let backend = mutbackend();
    if backend.state.player.queuestate.queue.is_empty() {
        return Ok(());
    }
    
    let currenturl = &backend.state.player.queuestate.queue[0].url;
    
    if let Some(mut process) = backend.mpvprocess.take() {
        let _ = process.kill();
    }
    
    backend.mpvprocess = Some(Command::new("mpv")
        .arg(currenturl)
        .arg("--input-ipc-server=/tmp/mpvlayer")
        .arg("--no-video")
        .arg("--no-terminal")
        .stdout(Stdio::null())
        .stderr(Stdio::null())
        .spawn()?);
    
    backend.state.player.isplaying = true;
    Ok(())
}

// --- navigation ---

pub fn nextcolumn() {
    let backend = mutbackend();
    backend.selection.selectedcolumn = match backend.selection.selectedcolumn {
        CurrentColumn::Playlists => CurrentColumn::Tracks,
        CurrentColumn::Tracks => CurrentColumn::Queue,
        CurrentColumn::Queue => CurrentColumn::Queue,
    };
}

pub fn prevcolumn() {
    let backend = mutbackend();
    backend.selection.selectedcolumn = match backend.selection.selectedcolumn {
        CurrentColumn::Playlists => CurrentColumn::Playlists,
        CurrentColumn::Tracks => CurrentColumn::Playlists,
        CurrentColumn::Queue => CurrentColumn::Tracks,
    };
}

pub fn nextrow() {
    let backend = mutbackend();
    match backend.selection.selectedcolumn {
        CurrentColumn::Playlists => {
            let current = backend.selection.selectedplaylist.unwrap_or(0);
            let numberofplaylists = backend.state.playlists.len();
            let next = if current + 1 >= numberofplaylists {
                numberofplaylists
            } else {
                current + 1
            };
            backend.selection.selectedplaylist = Some(next);
        },
        CurrentColumn::Tracks => {
            if let Some(playlistidx) = backend.selection.selectedplaylist {
                if let Some(playlist) = backend.state.playlists.get(playlistidx) {
                    let current = backend.selection.selectedtrack.unwrap_or(0);
                    let numberoftracks = playlist.tracks.len();
                    let next = if current + 1 >= numberoftracks {
                        numberoftracks
                    } else {
                        current + 1
                    };
                    backend.selection.selectedtrack = Some(next);
                }
            }
        },
        CurrentColumn::Queue => {
            let current = backend.selection.selectedtrack.unwrap_or(0);
            let queuelength = backend.state.player.queuestate.queue.len();
            let next = if current >= queuelength - 1 {
                queuelength
            } else {
                current + 1
            };
            backend.selection.selectedtrack = Some(next);
        }
    }
}

pub fn prevrow() {
    let backend = mutbackend();
    match backend.selection.selectedcolumn {
        CurrentColumn::Playlists => {
            let current = backend.selection.selectedplaylist.unwrap_or(0);
            let next = if current <= 0 {
                0
            } else {
                current - 1
            };
            backend.selection.selectedplaylist = Some(next);
        },
        CurrentColumn::Tracks => {
            if let Some(playlistidx) = backend.selection.selectedplaylist {
                if let Some(_) = backend.state.playlists.get(playlistidx) {
                    let current = backend.selection.selectedtrack.unwrap_or(0);
                    let next = if current <= 0 {
                        0
                    } else {
                        current - 1
                    };
                    backend.selection.selectedtrack = Some(next);
                }
            }
        },
        CurrentColumn::Queue => {
            let current = backend.selection.selectedtrack.unwrap_or(0);
            let next = if current <= 0 {
                0
            } else {
                current - 1
            };
            backend.selection.selectedtrack = Some(next);
        }
    }
}
