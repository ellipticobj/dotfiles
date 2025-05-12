// mod.rs
// backend

pub mod get;
pub mod set;

pub struct Backend {
    state: AppState,
    selection: SelectionState,
    mpvprocess: Option<Child>,
}

pub use crate::backend::Backend;
