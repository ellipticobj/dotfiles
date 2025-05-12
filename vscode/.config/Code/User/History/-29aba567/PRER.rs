// mod.rs
// backend

pub mod get;
pub mod set;

pub struct Backend {
    state: AppState,
    selection: SelectionState,
    mpvprocess: Option<Child>,
}

pub use crate::backend::Backend;

impl Backend {
    pub fn new() -> Self {
        // initialize the backend 
        let backend = Backend {
            state: AppState {
                playlists: Vec::new(),
                player: PlayerState {
                    isplaying: false,
                    currenttime: 0,
                    queuestate: QueueState {
                        queue: Vec::new(),
                        history: Vec::new(),
                    },
                    repeatstate: RepeatState {
                        repeatmode: RepeatMode::None,
                        originalqueue: vec![]
                    },
                    shufflestate: ShuffleState {
                        shuffle: false,
                        originalqueue: vec![]
                    }
                }
            },
            selection: SelectionState {
                selectedcolumn: CurrentColumn::Playlists, // playlists column selected on startup
                selectedplaylist: None,
                selectedtrack: None,
            },
            mpvprocess: None,
        };
        
        backend
    }

    // --- cleanup (called on app exit) ---
    pub fn shutdown(&mut self) -> Result<()> {
        if let Some(mut process) = self.mpvprocess.take() {
            let _ = process.kill();
        }
        
        Ok(())
    }
}
