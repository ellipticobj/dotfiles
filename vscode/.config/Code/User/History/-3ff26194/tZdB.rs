// backend.rs
// Core logic and state management for the music player.

use crate::models::*;
use anyhow::Result;
use std::process::Child;

pub struct Backend {
    state: AppState,
    mpv_process: Option<Child>, // Handle to the mpv process if running
    // Add other backend-specific fields as needed (e.g., socket path)
}

impl Backend {
    pub fn new() -> Self {
        // Initialize the backend with default or loaded state
        Backend {
            state: AppState {
                playlists: Vec::new(),
                player: PlayerState {
                    isplaying: false,
                    currenttrack: None,
                    currenttime: 0,
                    queue: Vec::new(),
                    current_queue_idx: 0,
                    repeat_mode: RepeatMode::None,
                    shuffle: false,
                },
            },
            mpv_process: None,
        }
    }

    // --- Playback Control Methods ---
    pub fn play(&mut self) -> Result<()> {
        // TODO: Implement logic to start/resume playback with mpv
        // - If no track is selected, select the first in queue or do nothing
        // - Update self.state.player.is_playing
        // - Spawn or communicate with mpv process
        Ok(())
    }

    pub fn pause(&mut self) -> Result<()> {
        // TODO: Implement logic to pause playback
        // - Send pause command to mpv
        // - Update self.state.player.is_playing
        Ok(())
    }

    pub fn next(&mut self) -> Result<()> {
        // TODO: Move to next track in queue based on repeat/shuffle settings
        // - Update self.state.player.current_queue_idx and current_track
        // - Call play() if needed
        Ok(())
    }

    pub fn prev(&mut self) -> Result<()> {
        // TODO: Move to previous track in queue based on repeat settings
        // - Update self.state.player.current_queue_idx and current_track
        // - Call play() if needed
        Ok(())
    }

    pub fn toggle_shuffle(&mut self) -> Result<()> {
        // TODO: Toggle shuffle mode and reshuffle queue if needed
        // - Update self.state.player.shuffle
        Ok(())
    }

    pub fn cycle_repeat(&mut self) -> Result<()> {
        // TODO: Cycle through repeat modes (None -> All -> One -> None)
        // - Update self.state.player.repeat_mode
        Ok(())
    }

    // --- Queue and Playlist Management ---
    pub fn set_queue(&mut self, tracks: Vec<Track>) {
        // TODO: Set the playback queue
        // - Update self.state.player.queue
        // - Reset current_queue_idx if needed
    }

    pub fn add_to_queue(&mut self, track: Track) {
        // TODO: Add a track to the end of the queue
        // - Append to self.state.player.queue
    }

    pub fn select_track_from_queue(&mut self, index: usize) -> Result<()> {
        // TODO: Set the current track based on queue index
        // - Update self.state.player.current_queue_idx and current_track
        // - Trigger playback
        Ok(())
    }

    pub fn add_playlist(&mut self, playlist: Playlist) {
        // TODO: Add a playlist to the list
        // - Append to self.state.playlists
    }

    pub fn select_playlist(&mut self, index: usize) -> Result<()> {
        // TODO: Set the queue to the selected playlist's tracks
        // - Check if index is valid in self.state.playlists
        // - Update self.state.player.queue
        Ok(())
    }

    // --- State Access Methods (for frontend to read) ---
    pub fn get_state(&self) -> &AppState {
        &self.state
    }

    // --- Cleanup (called on app exit) ---
    pub fn shutdown(&mut self) -> Result<()> {
        // TODO: Clean up resources
        // - Kill mpv process if running
        // - Any other cleanup
        Ok(())
    }
}
