// models.rs
// shared data structures for the music player app.

#[derive(Clone, Debug, PartialEq, Eq)]
pub enum CurrentColumn {
    Playlists,
    Tracks,
    Queue,
}

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

pub struct QueueState {
    pub queue: Vec<Track>,
    pub playnext: Vec<Track>,
    pub history: Vec<Track>
}

#[derive(Clone, Debug)]
pub struct PlayerState {
    pub isplaying: bool,
    pub currenttime: u32, // in seconds
    pub queue:QueueState, 
    pub currentqueueidx: u32, // index of current track in queue
    pub repeatmode: RepeatMode,
    pub shuffle: bool,
}

pub struct SelectionState {
    pub selectedcolumn: CurrentColumn,
    pub selectedplaylist: Option<u32>, 
    pub selectedtrack: Option<u32>
}

#[derive(Clone, Debug)]
pub struct AppState {
    pub playlists: Vec<Playlist>,
    pub player: PlayerState,
}
