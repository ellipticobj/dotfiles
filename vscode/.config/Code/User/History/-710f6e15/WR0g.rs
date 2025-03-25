use crossterm::event::KeyCode;

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
fn main() {
    println!("Hello, world!");
}
