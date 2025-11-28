# 2giosangmitom's Personal Blog

A modern personal blog built with Nuxt 4, featuring articles, tags, and a clean, responsive design.

🌐 **Live Site**: [https://2giosangmitom.is-a.dev](https://2giosangmitom.is-a.dev) | [https://2giosangmitom.github.io/](https://2giosangmitom.github.io/)

## ✨ Features

- 📝 **Content Management** with Nuxt Content
- 🎨 **Modern UI** powered by Nuxt UI
- 🔍 **Search Functionality** for articles
- 🏷️ **Tag-based Navigation** for content organization
- 🌙 **Dark/Light Mode** support
- 📱 **Responsive Design** for all devices
- 🎯 **SEO Optimized** with sitemap and robots.txt
- ⚡ **Fast Performance** with static site generation
- 💬 **Contact Form** with Discord webhook integration

## 🛠️ Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Content**: [Nuxt Content](https://content.nuxt.com/)
- **UI Components**: [Nuxt UI](https://ui.nuxt.com/)
- **Icons**: [Iconify](https://iconify.design/)
- **Animations**: [Motion](https://motion.dev/docs/vue)
- **Utilities**: [VueUse](https://vueuse.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📦 Prerequisites

- [Mise](https://mise.jdx.dev/)

## 🚀 Getting Started

### Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/2giosangmitom/2giosangmitom.github.io.git
cd 2giosangmitom.github.io

# Install tools
mise install

# Install dependencies
pnpm install
```

### Development

Start the development server at `http://localhost:3000`:

```bash
pnpm dev
```

### Production Build

Generate the static site for production:

```bash
pnpm generate
```

### Preview Production Build

Preview the production build locally:

```bash
pnpm preview
```

### Linting

Run ESLint to check code quality:

```bash
pnpm lint
```

## 📁 Project Structure

```
├── app/                   # Application source code
│   ├── assets/            # Static assets (CSS, fonts,...)
│   ├── components/        # Vue components
│   ├── layouts/           # Layout components
│   └── pages/             # Page components (routes)
├── content/               # Markdown content
│   ├── articles/          # Blog articles
│   └── author/            # About page content
├── public/                # Public static files
├── nuxt.config.ts         # Nuxt configuration
├── content.config.ts      # Content module configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## ✍️ Writing Articles

Add new articles as Markdown files in the `content/articles/` directory:

```markdown
---
pubDate: 2025-11-28
tags:
  - tag1
  - tag2
---

# Article Title

Your article content here...
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
NUXT_DISCORD_WEBHOOK_URL=your_discord_webhook_url
```

### Site Configuration

Edit `nuxt.config.ts` to customize site settings:

```typescript
site: {
  url: 'https://your-domain.com',
  name: 'Your Site Name'
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/2giosangmitom/2giosangmitom.github.io/issues).

---

Built with ❤️ using [Nuxt](https://nuxt.com/)
