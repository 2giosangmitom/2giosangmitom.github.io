---
createdOn: '2025-04-02'
updatedOn: '2025-04-17'
tags:
  - neovim
  - productivity
description: 'How to setup and use nvim-dbee'
---

# How I use Neovim as database client

If you work with databases and love Neovim, you'll appreciate [nvim-dbee](https://github.com/kndndrj/nvim-dbee) - a plugin that turns Neovim into a powerful database client. Unlike alternatives like [vim-dadbod](https://github.com/tpope/vim-dadbod), **nvim-dbee doesn't require CLI tools**, making it perfect for Docker-based workflows.

In this post, I'll show you how to set it up and supercharge it with SQL linting and formatting.

![nvim-dbee](/content/blog/nvim-dbee/nvim-dbee.png)

## Why nvim-dbee?

- **No external CLI needed**: Works directly with databases (PostgreSQL, MySQL, SQLite, etc.).
- **Docker-friendly**: Ideal if you run databases in containers.
- **Modern UI**: It has a friendly and easy to use and manage connections.
- **Auto pagination**: Results are automatically split across pages.

## Installation

Using [lazy.nvim](https://github.com/folke/lazy.nvim):

```lua
{
  "kndndrj/nvim-dbee",
  cmd = "Dbee", -- Lazy-load on command
  dependencies = { "MunifTanjim/nui.nvim" },
  build = function()
    require("dbee").install("curl") -- Requires `curl`
  end,
  opts = {}, -- Add custom config here
}
```

## Bonus: SQL Linting & Formatting

I'm using these tools for my SQL workflow on Neovim.

- [sqruff](https://github.com/quarylabs/sqruff): A fast SQL formatter/linter

### Setup

Use this snippet to enable sqruff.

```lua
-- For lazy.nvim
{
  "neovim/nvim-lspconfig",
  event = { "BufReadPost", "BufNewFile" },
  dependencies = {
    "williamboman/mason.nvim", -- If you use mason.nvim
  },
  opts = {
    servers = {
      sqruff = {}, -- Enable sqruff LSP server
    },
  },
  config = function(_, opts)
    local servers = opts.servers
    for server, server_opts in pairs(servers) do
      vim.lsp.enable(server)
      vim.lsp.config(server, server_opts)
    end
  end,
}
```

## Enjoy it

Run `:Dbee` in Neovim and connect to your database.
