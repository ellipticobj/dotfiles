// backend.rs
// core logic and state management

use crate::models::*;
use anyhow::Result;
use rand::{seq::SliceRandom, rng};
use std::process::Child;
use std::process::{Command, Stdio};
use crate::models::{AppState, PlayerState, QueueState, RepeatState, RepeatMode, ShuffleState, SelectionState, CurrentColumn, MAXQUEUELENGTH, MPVSOCKET};
use serde_json;

