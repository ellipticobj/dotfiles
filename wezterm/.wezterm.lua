-- ~/.config/wezterm/.wezterm.lua

-- Pull in the wezterm API
local wezterm = require("wezterm")

-- This will hold the configuration.
local config = wezterm.config_builder()

-- This is where you actually apply your config choices

-- === Rose Pine Dawn Theme Configuration ===

-- Rose Pine Dawn Palette
local dawn_palette = {
	base = "#faf4ed",
	overlay = "#f2e9e1",
	muted = "#9893a5",
	text = "#575279",
	love = "#b4637a",
	gold = "#ea9d34",
	rose = "#d7827e",
	pine = "#286983",
	foam = "#56949f",
	iris = "#907aa9",
	-- highlight_high = '#cecacd', -- not used in this direct implementation
}

local dawn_active_tab = {
	bg_color = dawn_palette.overlay,
	fg_color = dawn_palette.text,
}

local dawn_inactive_tab = {
	bg_color = dawn_palette.base,
	fg_color = dawn_palette.muted,
}

-- Set the colors configuration using the dawn palette
config.colors = {
	foreground = dawn_palette.text,
	background = dawn_palette.base,
	cursor_bg = dawn_palette.muted,
	cursor_border = dawn_palette.muted,
	cursor_fg = dawn_palette.text,
	selection_bg = dawn_palette.overlay,
	selection_fg = dawn_palette.text,

	ansi = {
		"#f2e9de", -- adjusted black for contrast
		dawn_palette.love,
		dawn_palette.pine,
		dawn_palette.gold,
		dawn_palette.foam,
		dawn_palette.iris,
		dawn_palette.rose,
		dawn_palette.text,
	},

	brights = {
		"#6e6a86", -- muted from original rose-pine for bright black
		dawn_palette.love,
		dawn_palette.pine,
		dawn_palette.gold,
		dawn_palette.foam,
		dawn_palette.iris,
		dawn_palette.rose,
		dawn_palette.text,
	},

	-- Tab bar color settings
	tab_bar = {
		background = dawn_palette.base,
		active_tab = dawn_active_tab,
		inactive_tab = dawn_inactive_tab,
		inactive_tab_hover = dawn_active_tab,
		new_tab = dawn_inactive_tab,
		new_tab_hover = dawn_active_tab,
		inactive_tab_edge = dawn_palette.muted, -- (Fancy tab bar only)
	},
}

config.window_frame = {
	active_titlebar_bg = dawn_palette.base,
	inactive_titlebar_bg = dawn_palette.base,
}
-- === End of Rose Pine Dawn Theme Configuration ===

-- === Your other configurations ===

-- Note: You have tab_bar colors defined above, but this line
-- disables the display of the tab bar. Change to `true` if you
-- want the tab bar visible with the colors defined above.
config.enable_tab_bar = false

config.window_decorations = "RESIZE"

config.window_background_opacity = 0.8259
config.macos_window_background_blur = 10

-- === End of your other configurations ===

-- and finally, return the configuration to wezterm
return config
