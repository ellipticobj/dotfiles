return {
  'folke/snacks.nvim',
  priority = 1000,
  lazy = false,
  ---@type snacks.Config
  opts = {
    animate = { enabled = true },
    bigfile = { enabled = true },
    dashboard = {
      enabled = true,
      preset = {
        pick = function(cmd, opts)
          return LazyVim.pick(cmd, opts)()
        end,
        -- TODO: make better header smh
        header = [[mwemewmewmewmew]],

        --stylua: ignore
        --@type snacks.dashboard.Item[]
        keys = {
         { icon = " ", key = "n", desc = "New File", action = ":ene | startinsert" },
         { icon = " ", key = "g", desc = "Find Text", action = ":lua Snacks.dashboard.pick('live_grep')" },
         { icon = " ", key = "r", desc = "Recent Files", action = ":lua Snacks.dashboard.pick('oldfiles')" },
         { icon = " ", key = "s", desc = "Restore Session", section = "session" },
         { icon = " ", key = "x", desc = "Lazy Extras", action = ":LazyExtras" },
         { icon = "󰒲 ", key = "l", desc = "Lazy", action = ":Lazy" },
         { icon = " ", key = "q", desc = "Quit", action = ":qa" },
        },
      },
    },
    debug = { enabled = true },
    indent = { enabled = true },
    input = { enabled = true },
    lazygit = { enabled = true },
    notifier = { enabled = true },
    notify = { enabled = true },
    picker = { enabled = true },
    quickfile = { enabled = true },
    scope = { enabled = true },
    scroll = { enabled = true },
    statuscolumn = { enabled = true },
    terminal = { enabled = true },
    util = { enabled = true },
    win = { enabled = true },
    words = { enabled = true },
  },
  -- stylua: ignore
  keys = {
    { "<leader>n", function()
      if Snacks.config.picker and Snacks.config.picker.enabled then
        Snacks.picker.notifications()
      else
        Snacks.notifier.show_history()
      end
    end, desc = "notification history" },
    {
      '<leader>un',
      function()
        Snacks.notifier.hide()
      end,
      desc = 'dismiss all notifications',
    }
  }
,
}
