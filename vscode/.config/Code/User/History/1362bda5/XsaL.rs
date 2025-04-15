// main.rs

mod backend;
mod frontend;
mod models;

use anyhow::Result;
use backend::Backend;
use frontend::run_frontend;

fn main() -> Result<()> {
    // initialize backend
    let mut backend = Backend::new();

    // start frontend, passing the backend for interaction
    run_frontend(&mut backend)?;

    // Cleanup (handled by frontend for now, or call backend.shutdown() if needed)
    // backend.shutdown()?;

    Ok(())
}
