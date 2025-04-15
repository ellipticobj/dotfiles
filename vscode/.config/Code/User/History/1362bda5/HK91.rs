// main.rs
// entry point

mod backend;
mod frontend;
mod models;

use std::io::{self, Write};

use anyhow::Result;
use backend::Backend;
use frontend::runfrontend;

const DEBUG: bool = true;

fn main() -> Result<()> {
    if DEBUG {
        // initialize backend
        let mut backend = Backend::new();

        // start frontend, passing the backend for interaction
        runfrontend(&mut backend)?;

        // cleanup (handled by frontend for now, or call backend.shutdown() if needed)
        // backend cleanup
        backend.shutdown()?;

    } else {
        println!("--- Backend Debug CLI ---");
        println!("Available commands: play, pause, next, prev, state, add <url>, queue, exit");
    
        // initialize the backend
        let mut backend = Backend::new();
        // TODO: Maybe load some initial test data into the backend if needed
        backend.addplaylist(models::Playlist { name: "Test Playlist".to_string(), tracks: Vec::new() });
    
        let mut inputbuffer = String::new();
    
        // main command loop
        loop {
            print!("> "); // prompt
            io::stdout().flush()?;
    
            // Clear the buffer and read the next line
            inputbuffer.clear();
            if io::stdin().read_line(&mut inputbuffer)? == 0 {
                // Handle EOF (Ctrl+D)
                println!("Exiting...");
                break;
            }
    
            // Parse the input
            let parts: Vec<&str> = inputbuffer.trim().split_whitespace().collect();
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
                    if let Err(e) = backend.nexttrack() {
                        println!("Error going to next track: {}", e);
                    } else {
                        println!("Next command sent.");
                    }
                }
                "prev" => {
                    if let Err(e) = backend.prevtrack() {
                        println!("Error going to previous track: {}", e);
                    } else {
                        println!("Prev command sent.");
                    }
                }
                "state" => {
                    // Print the current backend state (using Debug format)
                    println!("{:#?}", backend.getstate());
                }
                "add" => {
                    if args.len() == 1 {
                        let url = args[0].to_string();
                        // Create a dummy track for testing
                        let track = models::Track {
                            title: format!("Track from {}", url),
                            artist: "Unknown".to_string(),
                            duration: 0, // You might fetch this later
                            url,
                        };
                        backend.addtoqueue(track);
                        println!("added track to queue.");
                    } else {
                        println!("usage: add <url>");
                    }
                }
                "queue" => {
                    println!("current Queue:");
                    for (i, track) in backend.getstate().player.queue.iter().enumerate() {
                        println!("  {}: {} - {}", i, track.artist, track.title);
                    }
                }
                "exit" | "quit" => {
                    println!("exiting...");
                    break;
                }
                _ => {
                    println!("unknown command: {}", command);
                }
            }
        }
    }

    Ok(())
}
