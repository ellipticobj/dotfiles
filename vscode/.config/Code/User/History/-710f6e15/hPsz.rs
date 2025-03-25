use std::{error::Error, io};
use crossterm::{
    event::{self, DisableMouseCapture, EnableMouseCapture, Event, KeyCode, KeyEventKind},
    execute,
    terminal::{disable_raw_mode, enable_raw_mode, EnterAlternateScreen, LeaveAlternateScreen},
};
use ratatui::{
    backend::{Backend, CrosstermBackend},
    widgets::{Block, Borders, Paragraph},
    Terminal,
};
use std::time::{Duration, Instant};

struct App {
    shouldquit: bool,
}

impl App {
    fn new() -> App {
        App { shouldquit: false }
    }

    fn ontick(&mut self) {}

    fn onkey(&mut self, key: KeyCode) {
        match key {
            KeyCode::Char('q') => {
                self.shouldquit = true;
            }
            _ => {}
        }
    }
}
fn main() {
    println!("Hello, world!");
}
