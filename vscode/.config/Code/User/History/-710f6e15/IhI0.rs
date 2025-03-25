use std::{error::Error, io};
use crossterm::{
    event::{
        self, 
        DisableMouseCapture, 
        EnableMouseCapture, 
        Event, 
        KeyCode, 
        KeyEventKind
    },
    execute,
    terminal::{
        disable_raw_mode, 
        enable_raw_mode, 
        EnterAlternateScreen, 
        LeaveAlternateScreen
    },
};
use ratatui::{
    backend::{
        Backend, 
        CrosstermBackend
    },
    widgets::{
        Block, 
        Borders
    },
    Terminal,
};
use std::time::{
    Duration, 
    Instant
};

struct App {
    running: bool,
}

impl App {
    fn new() -> App {
        App { running: true }
    }

    fn ontick(&mut self) {}

    fn onkey(&mut self, key: KeyCode) {
        match key {
            KeyCode::Char('q') => {
                self.running = false;
            }
            _ => {}
        }
    }
}

fn newblock(title: &str) -> Block {
    Block::new()
        .title(format!(" {} ", title))
        .magenta()
        .borders(Borders::ALL)
}

fn run<B: Backend>(
    terminal: &mut Terminal<B>,
    mut app: App,
    tickrate: Duration,
) -> Result<(), Box<dyn Error>> {
    let mut lasttick = Instant::now();
    loop {
        terminal.draw(|f| {
            // main window
            let area = f.area();
            // let block = Block::default()
            //     .title(" meowgit ")
            //     .borders(Borders::ALL);
            let block = newblock(" meowgit ");
            f.render_widget(block, area);
        })?;

        let timeout = tickrate
            .checked_sub(lasttick.elapsed())
            .unwrap_or_else(|| Duration::from_secs(0));

        if crossterm::event::poll(timeout)? {
            if let Event::Key(key) = event::read()? {
                if key.kind == KeyEventKind::Press {
                    app.onkey(key.code);
                }
            }
        }

        if lasttick.elapsed() >= tickrate {
            app.ontick();
            lasttick = Instant::now();
        }

        if !app.running {
            return Ok(());
        }
    }
}


fn main() -> Result<(), Box<dyn Error>> {
    // setup terminal
    enable_raw_mode()?;
    let mut stdout = io::stdout();
    execute!(stdout, EnterAlternateScreen, EnableMouseCapture)?;
    let backend = CrosstermBackend::new(stdout);
    let mut terminal = Terminal::new(backend)?;
    terminal.clear()?;

    // create app and run it
    let tickrate = Duration::from_millis(250);
    let app = App::new();
    let res = run(&mut terminal, app, tickrate);

    // restore terminal
    disable_raw_mode()?;
    execute!(
        terminal.backend_mut(),
        LeaveAlternateScreen,
        DisableMouseCapture
    )?;
    terminal.show_cursor()?;

    if let Err(err) = res {
        println!("{:?}", err)
    }

    Ok(())
}
