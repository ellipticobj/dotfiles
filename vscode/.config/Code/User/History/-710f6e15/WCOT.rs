

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
