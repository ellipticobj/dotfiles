return {
    {
	    "ibhagwan/fzf-lua",
	    dependencies = { "nvim-tree/nvim-web-devicons" },
	    -- -- or if using mini.icons/mini.nvim
	    -- dependencies = { "echasnovski/mini.icons" },
	    opts = {}
    },
    {
	    "stevearc/quicker.nvim",
	    event = "FileType qf",
	    ---@module "quicker",
	    ---@type quicker.SetupOptions
	    opts = {}
    },
    {
	    "folke/noice.nvim",
	    event = "VeryLazy",
	    opts = {},
	    dependencies = {
		    "MunifTanjim/nui.nvim",
		    "rcarriga/nvim-notify"
	    }
    },
    {
	"nvim-lualine/lualine.nvim",
	dependencies = { "nvim-tree/nvim-web-devicons" }
    }
}

