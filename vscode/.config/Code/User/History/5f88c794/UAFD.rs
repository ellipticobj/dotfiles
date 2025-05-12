// models.rs
// shared data structures for the music player app.

pub const VERSION: String = "0.0.1";
pub const MAXQUEUELENGTH: usize = 100;
pub const MPVSOCKET: &str = "/tmp/mpvsocket";
pub const SONGINFOPERCENT: u16 = 60;

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
    pub url: String,
}

impl Default for Track {
    fn default() -> Self {
        Self {
            title: String::new(),
            artist: String::new(),
            url: String::new(),
        }
    }
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

#[derive(Clone, Debug, PartialEq, Eq)]
pub struct ShuffleState {
    pub shuffle: bool,
    pub originalqueue: Vec<Track>
}

#[derive(Clone, Debug, PartialEq, Eq)]
pub struct RepeatState {
    pub repeatmode: RepeatMode,
    pub originalqueue: Vec<Track>
}

#[derive(Clone, Debug, PartialEq, Eq)]
pub struct QueueState {
    pub queue: Vec<Track>,
    pub history: Vec<Track>
}

#[derive(Clone, Debug)]
pub struct PlayerState {
    pub isplaying: bool,
    pub currenttime: u32, // in seconds
    pub queuestate: QueueState,
    pub repeatstate: RepeatState,
    pub shufflestate: ShuffleState,
}

pub struct SelectionState {
    pub selectedcolumn: CurrentColumn,
    pub playliststate: ratatui::widgets::ListState,
    pub trackstate: ratatui::widgets::ListState,
    pub queuestate: ratatui::widgets::ListState
}

#[derive(Clone, Debug)]
pub struct PopupState {
    pub onscreen: bool,
    pub title: String,
    pub header: String,
    pub message: Vec<String>,
    pub dangerous: bool,
}

#[derive(Clone, Debug)]
pub struct AppState {
    pub playlists: Vec<Playlist>,
    pub player: PlayerState,
    pub popup: PopupState,
}
