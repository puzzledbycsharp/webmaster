# Puzzled By CSharp

A C# programming blog at [puzzledbycsharpcode.com](https://puzzledbycsharpcode.com). Each article takes one focused C# question (for example "how to remove duplicates from an array" or "dictionary vs hashtable"), compares the common approaches, and shows code samples, benchmark-style comparison tables and screenshots.

The site is built with [Qwik](https://qwik.builder.io/) and [Qwik City](https://qwik.builder.io/qwikcity/overview/), styled with Tailwind CSS, authored in MDX, and deployed to Netlify.

---

## What to expect from the blog

- **Articles live under `/blog/`**, grouped by topic:

  | Topic | URL |
  | --- | --- |
  | Arrays | `/blog/array/` |
  | Lists | `/blog/list/` |
  | Dictionaries | `/blog/dictionary/` |
  | Strings | `/blog/string/` |
  | JSON | `/blog/json/` |
  | Visual Studio | `/blog/visual-studio/` |
  | Code snippets (project build, exceptions, misc.) | `/blog/code-snippets/` |

- Each topic has an index page that lists its articles, and each article has a breadcrumb trail, a left-hand topic menu, an "On this page" outline, social share buttons, a subscribe form and a comments section.
- Other pages: the home page (hero cards and most-popular carousels), `/about/` and `/privacy-policy/`.
- Site search is provided by Algolia (Netlify crawler plugin), and analytics scripts are loaded off the main thread with Partytown.
- Old `/fundamentals/...` URLs are permanently redirected (301) to their current `/blog/...` locations via `netlify.toml`.

## Project structure

```
├── public/
│   └── assets/<topic>/<article>/   images (…-small / -medium / -large / -twitter .webp)
├── src/
│   ├── components/                 shared UI (header, footer, herocards, imagewrapper, table, ...)
│   │   └── global/global.ts        ROUTE_DATA: metadata for every article
│   └── routes/
│       ├── index.tsx               home page
│       ├── about/, privacy-policy/
│       ├── menu.md                 sidebar menu definition
│       └── blog/
│           └── <topic>/
│               ├── layout.tsx      topic layout (header, menu, breadcrumbs, footer)
│               ├── index.mdx       topic index listing its articles
│               └── <article>/index.mdx   the article
├── adapters/static/                static site generation config
├── netlify.toml                    build settings, Node version and redirects
└── vite.config.ts
```

## Adding or editing an article

1. Create `src/routes/blog/<topic>/<article-slug>/index.mdx`. Use an existing article as the template (front matter, `ImageWrapper`, `Table`, code blocks).
2. Add the images to `public/assets/<topic>/<article-slug>/` in the `small`, `medium`, `large` and `twitter` sizes.
3. Reference images with a relative path whose `../` count matches the page depth. For `blog/<topic>/<article>/index.mdx` that is four levels: `../../../../assets/<topic>/<article>/<image>-medium.webp`. A wrong depth makes the image 404 (for example `/blog/assets/...`).
4. Link the article from its topic `index.mdx` using a path relative to that file (`<article-slug>/index.mdx`, with no topic prefix), otherwise the build reports "does not have a matching source file".
5. Add an entry to `ROUTE_DATA` in `src/components/global/global.ts` (title, URL, images, description, dates) so it appears in hero cards, search views and meta tags. Hero card links are rewritten to include `/blog/`.
6. Add it to `src/routes/menu.md` if it should appear in the side menu.

## Requirements

- Node.js 22 (pinned in `.node-version`, `.nvmrc` and `netlify.toml`). Vite 7 and sharp need Node 20.19+ or 22.12+; Netlify's default Node 16 fails the build.
- `ALGOLIA_API_KEY` and `ALGOLIA_BASE_URL` environment variables for the Algolia crawler plugin on Netlify.

## Commands

```shell
npm install          # install dependencies
npm start            # dev server (SSR mode) and open the browser
npm run build        # production build (client + type check)
npm run build.server # static site generation (adapters/static)
npm run preview      # build and preview locally
npm run lint         # eslint
npm run fmt          # prettier
```

> In dev mode Vite requests many `.js` files; this is not representative of a production build.

## Deployment

The site deploys to Netlify from the `main` branch. `netlify.toml` defines the build command (`npm run build`), publish directory (`dist`), Node version and redirects. Every push to `main` triggers a build.

To preview a production build locally, run `npm run preview`.

## Useful links

- [Qwik docs](https://qwik.builder.io/)
- [Qwik City routing](https://qwik.builder.io/qwikcity/routing/overview/)
- [Vite](https://vitejs.dev/)
- [Netlify docs](https://docs.netlify.com/)
