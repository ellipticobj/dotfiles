-- lua/plugins/mason.lua
return {
    {
        "williamboman/mason-lspconfig.nvim",
        config = function()
            require("mason-lspconfig").setup({
                ensure_installed = {
                    "lua_ls", -- lua
                    "pyright", -- python
                    "ts_ls" -- typescript & javascript
                }

            })

        end
    },
    {
        "neovim/nvim-lspconfig",
        config = function()
            local lspconfig = require("lspconfig")

            lspconfig.lua_ls.setup({
            })

            lspconfig.pyright.setup({
            })

            lspconfig.ts_ls.setup({
            })

        end
    }
}


