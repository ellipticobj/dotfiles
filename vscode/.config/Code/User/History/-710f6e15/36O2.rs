

struct App {
    shouldquit: bool,
}

impl App {
    fn new() -> App {
        App { shouldquit: false }
    }
}
fn main() {
    println!("Hello, world!");
}
