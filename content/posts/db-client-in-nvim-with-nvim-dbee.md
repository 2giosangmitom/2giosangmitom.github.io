---
title: "How I use Neovim as database client"
createdOn: "2025-04-02"
updatedOn: "2025-04-04"
tags: ["neovim", "database", "productivity"]
description: "How to setup and use nvim-dbee"
---

If you work with databases and love Neovim, you'll appreciate **[nvim-dbee](https://github.com/kndndrj/nvim-dbee)**—a plugin that turns Neovim into a powerful database client. Unlike alternatives like [vim-dadbod](https://github.com/tpope/vim-dadbod), **nvim-dbee doesn't require CLI tools**, making it perfect for Docker-based workflows.

In this post, I'll show you how to set it up and supercharge it with SQL linting and formatting.

![nvim-dbee](/images/db-client-in-nvim-with-nvim-dbee/nvim-dbee.png)

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

For a polished SQL workflow, integrate:

- **[sqlfluff](https://github.com/sqlfluff/sqlfluff)** - A modular SQL linter and auto-formatter with support for multiple dialects and templated code.
- **[nvim-lint](https://github.com/mfussenegger/nvim-lint)** - An asynchronous linter plugin for Neovim complementary to the built-in Language Server Protocol support.
- **[conform.nvim](https://github.com/stevearc/conform.nvim)** - Lightweight yet powerful formatter plugin for Neovim.

### Setup

```lua
-- Linting
{
  "mfussenegger/nvim-lint",
  opts = {
    linters_by_ft = {
      sql = { "sqlfluff" }, -- Lint SQL files
    },
  },
},

-- Formatting
{
  "stevearc/conform.nvim",
  opts = {
    formatters_by_ft = {
      sql = { "sqlfluff" }, -- Format SQL files
    },
    formatters = {
      sqlfluff = {
        args = { "fix", "--dialect=ansi", "-" }, -- ANSI SQL dialect
        require_cwd = false,
      },
    },
  },
}
```

## Enjoy it

Run `:Dbee` in Neovim and connect to your database.