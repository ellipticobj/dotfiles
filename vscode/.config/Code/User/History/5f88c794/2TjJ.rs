// models.rs
// shared data structures for the music player app.

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

#[derive(Clone, Debug)]
pub struct SelectionState {
    pub selectedcolumn: CurrentColumn,
    pub selectedplaylist: Option<usize>,
    pub selectedtrack: Option<usize>
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

// UI helper functions
pub fn getsonginfocont(track: &Track, shuffle: bool, repeat: RepeatMode) -> ratatui::widgets::Paragraph<'static> {
    use ratatui::{style::{Color, Style}, text::Line, widgets::{Block, BorderType, Borders, Paragraph}};

    // --- create display text based on track info ---
    let displaytext: String = if track.artist.is_empty() {
        String::from(format!(" {} ", track.title))
    } else if track.title.is_empty() {
        String::from(format!(" Unknown Track - {} ", track.artist))
    } else {
        String::from(format!(" {} - {} ", track.title, track.artist))
    };

    // --- get controls state string ---
    let controlsstatestring = getcontrolsstate(shuffle, repeat);
    let controlsstateline = Line::from(format!(" {} ", controlsstatestring)).right_aligned();

    // --- build the final Paragraph ---
    Paragraph::new(displaytext)
        .block(
            Block::default()
                .title_top(" currently playing ")
                .title_top(controlsstateline)
                .border_type(BorderType::Rounded)
                .borders(Borders::ALL),
        )
        .style(Style::default().fg(Color::Magenta))
        .alignment(ratatui::layout::Alignment::Left)
}

pub fn getcontrolsstate(shuffle: bool, repeat: RepeatMode) -> String {
    // gets the state of shuffle and repeat
    let mut controls: Vec<String> = Vec::new();
    if shuffle {
        controls.push(String::from("shuffle on ─")); // extra dash so the text stays still call me a sigma
    } else {
        controls.push(String::from("shuffle off "));
    }

    match repeat {
        RepeatMode::None => controls.push(String::from(" repeat off")),
        RepeatMode::One => controls.push(String::from(" repeat one")),
        RepeatMode::All => controls.push(String::from(" repeat all"))
    }

    controls.join("──")
}

