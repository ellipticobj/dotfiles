// backend.rs
// core logic and state management

use crate::models::*;
use anyhow::Result;
use std::process::Child;

pub struct Backend {
    state: AppState,
    mpvprocess: Option<Child>,
}

impl Backend {
    pub fn new() -> Self {
        // initialize the backend 
        Backend {
            state: AppState {
                playlists: Vec::new(),
                player: PlayerState {
                    isplaying: false,
                    currenttrack: None,
                    currenttime: 0,
                    queue: Vec::new(),
                    currentqueueidx: 0,
                    repeatmode: RepeatMode::None,
                    shuffle: false,
                },
            },
            mpvprocess: None,
        }
    }

    // --- playback control methods ---
    pub fn play(&mut self) -> Result<()> {
        // TODO: implement logic to start/resume playback with mpv
        // - if no track is selected, select the first in queue or do nothing
        // - update self.state.player.isplaying
        // - spawn or communicate with mpv process
        Ok(())
    }

    pub fn pause(&mut self) -> Result<()> {
        // TODO: implement logic to pause playback
        // - send pause command to mpv
        // - update self.state.player.isplaying
        Ok(())
    }

    pub fn nexttrack(&mut self) -> Result<()> {
        // TODO: move to next track in queue based on repeat/shuffle settings
        // - update self.state.player.currentqueueidx and currenttrack
        // - call play() if needed
        Ok(())
    }

    pub fn prevtrack(&mut self) -> Result<()> {
        // TODO: move to previous track in queue based on repeat settings
        // - update self.state.player.currentqueueidx and currenttrack
        // - call play() if needed
        Ok(())
    }

    pub fn toggleshuffle(&mut self) -> Result<()> {
        // TODO: toggle shuffle mode and reshuffle queue if needed
        // - update self.state.player.shuffle
        Ok(())
    }

    pub fn cyclerepeat(&mut self) -> Result<()> {
        // TODO: cycle through repeat modes (None -> All -> One -> None)
        // - update self.state.player.repeatmode
        Ok(())
    }

    // --- queue and playlist management ---
    pub fn setqueue(&mut self, tracks: Vec<Track>) {
        // TODO: set the playback queue
        // - update self.state.player.queue
        // - reset currentqueueidx if needed
    }

    pub fn addtoqueue(&mut self, track: Track) {
        // TODO: Add a track to the end of the queue
        // - append to self.state.player.queue
    }

    pub fn selecttrackfromqueue(&mut self, index: usize) -> Result<()> {
        // TODO: Set the current track based on queue index
        // - update self.state.player.currentqueueidx and currenttrack
        // - trigger playback
        Ok(())
    }

    pub fn addplaylist(&mut self, playlist: Playlist) {
        // TODO: Add a playlist to the list
        // - append to self.state.playlists
    }

    pub fn selectplaylist(&mut self, index: usize) -> Result<()> {
        // TODO: Set the queue to the selected playlist's tracks
        // - check if index is valid in self.state.playlists
        // - update self.state.player.queue
        Ok(())
    }

    // --- state access methods (for frontend to read) ---
    pub fn get_state(&self) -> &AppState {
        &self.state
    }

    // --- cleanup (called on app exit) ---
    pub fn shutdown(&mut self) -> Result<()> {
        // TODO: Clean up resources
        // - kill mpv process if running
        // - any other cleanup
        Ok(())
    }
}
