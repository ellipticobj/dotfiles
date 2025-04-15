// frontend.rs
// TUI frontend for the music player.

use anyhow::Result;
use crossterm::{
    event::{self, Event, KeyCode, KeyEventKind},
    execute,
    terminal::{disable_raw_mode, enable_raw_mode, EnterAlternateScreen, LeaveAlternateScreen},
};
use ratatui::{
    backend::CrosstermBackend,
    widgets::ListState,
    Terminal,
};
use std::io;
use std::time::Duration;

use crate::backend::Backend;
use crate::models::{CurrentColumn, RepeatMode, Track, Playlist};

pub fn run_frontend(backend: &mut Backend) -> Result<()> {
    // --- Setup Terminal ---
    enable_raw_mode()?;
    let mut stdout = io::stdout();
    execute!(stdout, EnterAlternateScreen)?;
    let backend_tui = CrosstermBackend::new(stdout);
    let mut terminal = Terminal::new(backend_tui)?;

    // --- Initialize UI State ---
    // This is separate from backend state; it's just for UI-specific things
    let mut playlist_state = ListState::default();
    let mut tracks_state = ListState::default();
    let mut queue_state = ListState::default();
    let mut current_column = CurrentColumn::Playlists;
    let mut running = true;
    let version = String::from("0.0.1");

    // --- Main Loop ---
    let mut counter: u8 = 0;
    while running {
        // Draw the UI based on backend state
        let app_state = backend.get_state();
        terminal.draw(|frame| {
            rendermainview(
                &mut crate::App {
                    running,
                    playing: app_state.player.is_playing,
                    version: version.clone(),
                    repeatedinstance: false, // TODO: Handle this properly
                    playlists: app_state.playlists.clone(),
                    queue: app_state.player.queue.clone(),
                    queuebeforeshuffle: None, // TODO: Handle in backend if needed
                    queuebeforerepeat: None,  // TODO: Handle in backend if needed
                    currentqueueidx: app_state.player.current_queue_idx,
                    currentplaylistidx: 0, // TODO: Track in UI or backend
                    currentdurationsecs: app_state.player.current_time,
                    shuffle: app_state.player.shuffle,
                    repeat: match app_state.player.repeat_mode {
                        RepeatMode::None => crate::RepeatType::None,
                        RepeatMode::One => crate::RepeatType::One,
                        RepeatMode::All => crate::RepeatType::All,
                    },
                    mpv: None, // Handled by backend
                    currentcolumn,
                    playliststate: playlist_state.clone(),
                    tracksstate: tracks_state.clone(),
                    queuestate: queue_state.clone(),
                    lockfile: None, // Handled by backend or elsewhere
                    popup: crate::PopupState {
                        onscreen: false,
                        title: String::new(),
                        message: Vec::new(),
                    },
                },
                frame,
                construct(frame.area(), &app_state.player.is_playing),
            )
        })?;

        // Handle input
        if event::poll(Duration::from_millis(250))? {
            if let Event::Key(key) = event::read()? {
                if key.kind == KeyEventKind::Press {
                    handle_input(backend, &mut running, &mut current_column, &mut playlist_state, &mut tracks_state, &mut queue_state, key.code)?;
                }
            }
        }

        // Handle periodic updates (e.g., track progress)
        // TODO: Call backend methods to update player state
        counter = (counter + 1) % 4; // Example tick counter
        if counter == 0 {
            // TODO: Update current_time or check track end via backend
        }
    }

    // --- Cleanup ---
    execute!(io::stdout(), LeaveAlternateScreen)?;
    disable_raw_mode()?;

    Ok(())
}

fn handle_input(
    backend: &mut Backend,
    running: &mut bool,
    current_column: &mut CurrentColumn,
    playlist_state: &mut ListState,
    tracks_state: &mut ListState,
    queue_state: &mut ListState,
    key: KeyCode,
) -> Result<()> {
    // TODO: Handle popup if active (close on Enter/Esc)
    // if app.popup.onscreen { ... }

    // Handle input based on app state
    match key {
        KeyCode::Char('q') => *running = false,
        KeyCode::Char(' ') => backend.play()?, // Toggle play/pause
        KeyCode::Char('>') => backend.next()?,
        KeyCode::Char('<') => backend.prev()?,
        KeyCode::Char('s') => backend.toggle_shuffle()?,
        KeyCode::Char('r') => backend.cycle_repeat()?,
        // TODO: Navigation (Up/Down/Left/Right) to update UI state
        // KeyCode::Up => { ... update selection ... }
        // KeyCode::Enter => { ... select track or playlist ... }
        _ => {}
    }
    Ok(())
}
