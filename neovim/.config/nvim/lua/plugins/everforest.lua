return {
    "sainnhe/everforest",
    lazy = false, -- Load immediately
    priority = 1000, -- Ensure it loads before other UI plugins
    config = function()
        -- Additional settings can be done using Vim options
        vim.g.everforest_background = "hard" -- Options: "soft", "medium", "hard"
        vim.g.everforest_transparent_background = 100 -- 0 = No transparency
        vim.g.everforest_enable_italic = 0 -- Disable italics
        vim.g.everforest_disable_italic_comment = 0 -- Keep comments italic
        vim.g.everforest_sign_column_background = "none"
        vim.g.everforest_ui_contrast = "low"
        vim.g.everforest_dim_inactive_windows = 0
        vim.g.everforest_diagnostic_text_highlight = 0
        vim.g.everforest_diagnostic_virtual_text = "coloured"
        vim.g.everforest_diagnostic_line_highlight = 0
        vim.g.everforest_spell_foreground = 0
        vim.g.everforest_show_eob = 1
        vim.g.everforest_float_style = "bright"
        vim.g.everforest_inlay_hints_background = "none"
    end,
}

