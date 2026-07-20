# Ayesha Munir — Portfolio

Personal portfolio website for **Ayesha Munir**, AI Software Engineer & Researcher based in
Santiago de Compostela, Spain. Live at **[ashmunir.github.io](https://ashmunir.github.io/)**.

Built with **Astro**, **React** (islands) and **Tailwind CSS**. It includes an about section,
work experience, skills, selected projects, education and contact details.

## Tech stack

- [Astro](https://astro.build/) — static site framework (zero JS by default).
- [React](https://react.dev/) — interactive islands (`Sidebar`) hydrated with `client:load`.
- [Tailwind CSS v4](https://tailwindcss.com/) — styling via the Vite plugin.
- [Atkinson Hyperlegible](https://www.brailleinstitute.org/freefont/) — bundled font.

## Project structure

```
.
├── astro.config.mjs
├── public/
│   ├── assets/            # images, resume PDF, logos
│   └── fonts/             # Atkinson Hyperlegible
├── src/
│   ├── layouts/BaseLayout.astro   # <head>, SEO/OG meta, global styles
│   ├── pages/index.astro          # page composition
│   ├── styles/global.css          # Tailwind import, tokens, layout, keyframes
│   ├── data/
│   │   └── portfolio.ts           # typed content (experience, skills, projects, education)
│   └── components/
│       ├── Icon.tsx               # shared SVG icon set
│       ├── Sidebar.tsx            # island: scroll-spy nav + mobile drawer
│       └── *.astro                # static sections
└── .github/workflows/deploy.yml   # build + deploy to GitHub Pages
```

## Local development

```bash
npm install
npm run dev        # start dev server (http://localhost:4321)
npm run build      # production build to dist/
npm run preview    # preview the production build
```

## Editing content

- Text and structured data live in [`src/data/portfolio.ts`](src/data/portfolio.ts).

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which
builds the site and publishes it to GitHub Pages.

One-time setup in the repository: **Settings → Pages → Build and deployment → Source = "GitHub
Actions"**.

## License

Content and images © Ayesha Munir. All rights reserved.
