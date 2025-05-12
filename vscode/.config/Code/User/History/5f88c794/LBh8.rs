// models.rs
// shared data structures for the music player app.

#[derive(Clone, Debug, PartialEq, Eq)]
pub struct Track {
    pub title: String,
    pub artist: String,
    pub duration: u32, // in seconds
    pub url: String,
}

#[derive(Clone, Debug, PartialEq, Eq)]
pub struct Playlist {
    pub name: String,
    pub tracks: Vec<Track>,
}

#[derive(Clone, Debug, PartialEq, Eq)]
pub enum RepeatMode {
    None,
    One,
    All,
}

#[derive(Clone, Debug)]
pub struct PlayerState {
    pub isplaying: bool,
    pub currenttrack: Option<Track>,
    pub currenttime: u32, // in seconds
    pub queue: Vec<Track>,
    pub currentqueueidx: u32, // index of current track in queue
    pub repeatmode: RepeatMode,
    pub shuffle: bool,
}

#[derive(Clone, Debug)]
pub struct AppState {
    pub playlists: Vec<Playlist>,
    pub player: PlayerState,
}
