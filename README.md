# Studieux Atelier — Website

A fully responsive Next.js website converted pixel-perfect from Figma design.

## Tech Stack
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** — Anonymous Pro + Cormorant Garamond

## Pages
- `/` — Landing/Hero page (full-screen with centered nav)
- `/index` — Project list (tabular, sortable)
- `/gallery` — 3-column photo grid (24 images)
- `/studio` — About, People, Awards, Contact
- `/project/[slug]` — Individual project pages (24 projects)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

```bash
npm install -g vercel
vercel deploy
```

Or connect your GitHub repo to Vercel at [vercel.com](https://vercel.com).

## Replacing Images

The site currently uses placeholder images. Replace them with your Figma exports:

1. Export all images from Figma (see `EXPORT_IMAGES.md`)
2. Copy PNG files to `public/images/`
3. Name them exactly as specified in `app/data/projects.ts`

## Editing Content

All project data is in one file: **`app/data/projects.ts`**

To add/edit a project:
```ts
{
  slug: 'project-url-slug',
  name: 'Project Display Name',
  category: 'Category',
  location: 'City, State',
  projectType: 'Type of work',
  status: 'Completed | Ongoing',
  description: 'Project description...',
  images: {
    hero: '/images/filename-01.png',
    wide: '/images/filename-02.png',
    // ...
    cover: '/images/filename-01.png',
  }
}
```

## Folder Structure

```
studieux-atelier/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Desktop navbar
│   │   └── MobileNav.tsx       # Mobile hamburger nav
│   ├── data/
│   │   └── projects.ts         # ALL project data (edit here)
│   ├── index/page.tsx          # Project list page
│   ├── gallery/page.tsx        # Gallery grid page
│   ├── studio/page.tsx         # About/studio page
│   ├── project/[slug]/page.tsx # Individual project pages
│   ├── layout.tsx              # Root layout with fonts
│   ├── globals.css             # Global styles
│   └── page.tsx                # Landing/hero page
├── public/
│   └── images/                 # All images go here
├── EXPORT_IMAGES.md            # Instructions to get images from Figma
└── EXPORT_IMAGES_SCRIPT.js     # Figma plugin script for bulk export
```
