// main.rs
// entry point

mod backend;
mod frontend;
mod models;

use anyhow::Result;
use backend::Backend;
use frontend::run_frontend;

const DEBUG: bool = true;

fn main() -> Result<()> {
    if DEBUG {
        // initialize backend
        let mut backend = Backend::new();

        // start frontend, passing the backend for interaction
        run_frontend(&mut backend)?;

        // cleanup (handled by frontend for now, or call backend.shutdown() if needed)
        // backend cleanup
        backend.shutdown()?;

    } else {
        println!("--- Backend Debug CLI ---");
        println!("Available commands: play, pause, next, prev, state, add <url>, queue, exit");
    
        // Initialize the backend
        let mut backend = Backend::new();
        // TODO: Maybe load some initial test data into the backend if needed
        // backend.add_playlist(Playlist { ... });
    
        let mut input_buffer = String::new();
    
        // Main command loop
        loop {
            print!("> "); // Prompt
            io::stdout().flush()?; // Make sure '>' appears before waiting for input
    
            // Clear the buffer and read the next line
            input_buffer.clear();
            if io::stdin().read_line(&mut input_buffer)? == 0 {
                // Handle EOF (Ctrl+D)
                println!("Exiting...");
                break;
            }
    
            // Parse the input
            let parts: Vec<&str> = input_buffer.trim().split_whitespace().collect();
            if parts.is_empty() {
                continue; // Skip empty input
            }
    
            let command = parts[0];
            let args = &parts[1..];
    
            // Execute commands
            match command {
                "play" => {
                    if let Err(e) = backend.play() {
                        println!("Error playing: {}", e);
                    } else {
                        println!("Play command sent.");
                    }
                }
                "pause" => {
                    if let Err(e) = backend.pause() {
                        println!("Error pausing: {}", e);
                    } else {
                        println!("Pause command sent.");
                    }
                }
                "next" => {
                    if let Err(e) = backend.next() {
                        println!("Error going to next track: {}", e);
                    } else {
                        println!("Next command sent.");
                    }
                }
                "prev" => {
                    if let Err(e) = backend.prev() {
                        println!("Error going to previous track: {}", e);
                    } else {
                        println!("Prev command sent.");
                    }
                }
                "state" => {
                    // Print the current backend state (using Debug format)
                    println!("{:#?}", backend.get_state());
                }
                "add" => {
                    if args.len() == 1 {
                        let url = args[0].to_string();
                        // Create a dummy track for testing
                        let track = Track {
                            title: format!("Track from {}", url),
                            artist: "Unknown".to_string(),
                            duration: 0, // You might fetch this later
                            url,
                        };
                        backend.add_to_queue(track);
                        println!("Added track to queue.");
                    } else {
                        println!("Usage: add <url>");
                    }
                }
                "queue" => {
                    println!("Current Queue:");
                    for (i, track) in backend.get_state().player.queue.iter().enumerate() {
                        println!("  {}: {} - {}", i, track.artist, track.title);
                    }
                }
                "exit" | "quit" => {
                    println!("Exiting...");
                    break;
                }
                _ => {
                    println!("Unknown command: {}", command);
                }
            }
        }
    }

    Ok(())
}
