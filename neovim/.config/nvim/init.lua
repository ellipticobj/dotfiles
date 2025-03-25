-- NEOVIM CONFIG --

vim.cmd("set number relativenumber")

vim.cmd("set expandtab")
vim.cmd("set tabstop=4")
vim.cmd("set softtabstop=4")
vim.cmd("set shiftwidth=4")
-- leader set to spacebar
-- local leader set to \\ in ./lua/config/lazy.lua

require("config.lazy")

-- Set colorscheme
-- lualine statusline (task bar) colorscheme can be changed in ~/.config/nvim/lua/plugins/lualine.lua

-- vim.cmd("colorscheme slate") -- backup theme if catppuccin dont work
-- vim.cmd("colorscheme catppuccin") -- backup theme if gruvbox  dont work
-- vim.o.background = "light" -- sets gruvbox to light mode
vim.cmd("colorscheme gruvbox")

-- INCLUDE PACKAGES HERE --

-- includes lualine statusline (task bar) (installed in ~/.config/nvim/lua/plugins/lualine.lua)
-- includes gruvbox themes (installed in ~/.config/nvim/lua/plugins/gruvbox.lua)
-- includes catppuccin themes (installed in ~/.config/nvim/lua/plugins/catppuccin.lua)
-- includes nvim-treesitter (installed in ~/.config/nvim/lua/plugins/nvim-treesitter.lua)
-- includes neo-tree (installed in ~/.config/nvim/lua/plugins/neo-tree.lua)
-- includes everforest themes (configured with 1 opacity)
-- includes mason-lspconfig and nvim-lspconfig (installed in ~/.config/nvim/lua/plugins/lsp-config.lua)
-- includes mason (installed in ~/.config/nvim/lua/plugins/mason.lua)

-- includes telescope and telescope ui plugin (installed in ~/.config/nvim/lua/plugins/telescope.lua)
local builtin = require("telescope.builtin")

-- telescope key bindings -- 'n' stands for normal mode
vim.keymap.set('n', '<C-p>', builtin.find_files, {})     -- <C-p> / control p / (^p) -- it accesses telescope
vim.keymap.set('n', '<leader>gf', builtin.live_grep, {}) -- leader (spacebar) g f -- greps all files in wd

-- neo-tree key bindings
vim.keymap.set('n', '<leader>fm', ":Neotree toggle<CR>") -- leader (spacebar) f -- toggle neo-tree file manager

-- lsp key bindings
vim.keymap.set({ 'n', 'v', 'i' }, '<C-k>', vim.lsp.buf.hover, {})       -- hover effect like in vscode
vim.keymap.set({ 'n', 'v' }, '<leader>gd', vim.lsp.buf.definition, {})  -- get definition
vim.keymap.set({ 'n', 'v' }, '<leader>ca', vim.lsp.buf.code_action, {}) -- code action

-- none-ls key bindings
vim.keymap.set({ 'n' }, '<leader>ft', vim.lsp.buf.format, {}) -- formats text
