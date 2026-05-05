# awans.me

Personal website of Muhammad Yusran Rizgullah (Awan).
Built with Astro.js + Tailwind CSS. Hosted on GitHub Pages at `awans.me`.

## Setup
```sh
npm install
npm run dev
```

## Add a New IoT Project
1. Create a new file: `src/content/iot/project-name.md`
2. Fill the frontmatter (see `src/content/config.ts`)
3. Write the markdown content
4. Add images to `public/images/projects/iot/project-name/`
5. Push to `main` and GitHub Actions will deploy

## Add a Prompting Article
1. Create a new file: `src/content/prompting/article-name.md`
2. Fill the frontmatter
3. Push to `main` and GitHub Actions will deploy

## Deploy
Auto deploy via GitHub Actions on every push to `main`.
The workflow builds Astro and deploys the `dist/` artifact through GitHub Pages.

## Images
Use Astro's built-in assets for optimized images:

```astro
---
import { Image } from 'astro:assets';
import profilePic from '../assets/images/profile.webp';
---

<Image src={profilePic} alt="Awan" width={400} height={400} />
```

## Notes
- Update the email address in `src/data/contact.ts` if needed.
- Keep `public/CNAME` set to `awans.me`.
- Keep `public/.nojekyll` so GitHub Pages serves Astro output as plain static files.
