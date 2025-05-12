// get.rs
// backend read api

use super::Backend;
use crate::models::{AppState, PlayerState, Playlist, RepeatMode, Track};
use anyhow::Result;
use std::process::{Command, Stdio};
use serde_json;

// static reference to hold the backend instance
static mut BACKEND: Option<Backend> = None;

// initialize the static backend
pub fn initbackend(backend: Backend) {
    unsafe {
        BACKEND = Some(backend);
    }
}

// get reference to backend
fn getbackend() -> &'static Backend {
    unsafe {
        BACKEND.as_ref().expect("backend not initialized")
    }
}

// --- state access functions (for frontend to read) ---
pub fn state() -> &'static AppState {
    &getbackend().state
}

pub fn playingstate() -> &'static bool {
    &getbackend().state.player.isplaying
}

pub fn playerstate() -> &'static PlayerState {
    &getbackend().state.player
}

pub fn playlists() -> &'static Vec<Playlist> {
    &getbackend().state.playlists
}

pub fn repeatstate() -> &'static RepeatMode {
    &getbackend().state.player.repeatstate.repeatmode
}

pub fn shufflestate() -> &'static bool {
    &getbackend().state.player.shufflestate.shuffle
}

pub fn elapsedduration() -> Result<u32> {
    // Add timeout for socket operations
    let timeout = std::time::Duration::from_secs(2);
    
    // unique request ID for this request
    let requestid = rand::random::<u32>();
    
    let echoout = Command::new("echo")
        .arg(format!(r#"{{"command":["get_property","time-pos"], "request_id": {}}}"#, requestid))
        .stdout(Stdio::piped())
        .spawn()?;
    
    if let Some(echoout) = echoout.stdout {
        // send the command to mpv via socket and capture the output
        let socatout = Command::new("socat")
            .arg("-T")
            .arg(timeout.as_secs().to_string())
            .arg("-")
            .arg(MPVSOCKET)
            .stdin(Stdio::from(echoout))
            .stdout(Stdio::piped())
            .stderr(Stdio::piped())
            .output()?;
    
        if !socatout.status.success() {
            let stderr = String::from_utf8_lossy(&socatout.stderr);
            eprintln!("failed to get playback position from mpv: {}", stderr);
            return Ok(0);
        }
        
        // parse the JSON response
        let response = String::from_utf8_lossy(&socatout.stdout);
        
        // parse the response JSON
        if let Ok(json) = serde_json::from_str::<serde_json::Value>(&response) {
            // extract the position value
            if let Some(data) = json.get("data") {
                if let Some(position) = data.as_f64() {
                    return Ok(position.floor() as u32); // convert to u32 (seconds)
                }
            }
        }
        
        // return 0 if we couldn't parse the position
        return Ok(0);
    } else {
        eprintln!("failed to get stdout from echo command");
        return Ok(0); // return 0 on error
    }
}

pub fn totalduration() -> Result<u32> {
    let requestid = rand::random::<u32>();
    
    let echoout = Command::new("echo")
        .arg(format!(r#"{{"command":["get_property","duration"], "request_id": {}}}"#, requestid))
        .stdout(Stdio::piped())
        .spawn()?;
    
    if let Some(echoout) = echoout.stdout {
        // send the command to mpv via socket and capture the output
        let socatout = Command::new("socat")
            .arg("-")
            .arg(MPVSOCKET)
            .stdin(Stdio::from(echoout))
            .stdout(Stdio::piped())
            .stderr(Stdio::piped())
            .output()?;
        
        if !socatout.status.success() {
            let stderr = String::from_utf8_lossy(&socatout.stderr);
            eprintln!("failed to get total duration from mpv: {}", stderr);
            return Ok(0);
        }
        
        // parse the JSON response
        let response = String::from_utf8_lossy(&socatout.stdout);
        
        // parse the response JSON
        if let Ok(json) = serde_json::from_str::<serde_json::Value>(&response) {
            // extract the position value
            if let Some(data) = json.get("data") {
                if let Some(position) = data.as_f64() {
                    return Ok(position.floor() as u32); // convert to u32 (seconds)
                }
            }
        }
        
        // return 0 if we couldn't parse the position
        return Ok(0);
    } else {
        eprintln!("failed to get stdout from echo command");
        return Ok(0); // return 0 on error
    }
}

pub fn currentsong() -> Option<&'static Track> {
    getbackend().state.player.queuestate.queue.get(0)
}

pub fn queue() -> &'static Vec<Track> {
    &getbackend().state.player.queuestate.queue
}
