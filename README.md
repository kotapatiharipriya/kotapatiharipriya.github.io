# Haripriya Kotapati - Portfolio

A fully responsive, production-ready portfolio showcasing real machine learning projects, education, skills, certifications, and contact details. All project previews use actual output images.

## 🚀 Features
- Responsive across mobile, tablet, laptop, and large screens
- Real project outputs with modal galleries
- Smooth animations (Framer Motion) and polished UI (shadcn/ui + Tailwind)
- Toast notifications for contact form submissions
- Single-page routing with graceful fallbacks for GitHub Pages
- GitHub Pages CI workflow included

## 🧰 Tech Stack
- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion
- React Router

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ (20 used in CI)
- npm

### Install & Develop
```bash
git clone https://github.com/kotapatiharipriya/kotapatiharipriya.github.io.git
cd kotapatiharipriya.github.io
npm install
npm run dev   # http://localhost:5173
```

### Build & Preview
```bash
npm run build
npm run preview
```

## 🌐 GitHub Pages Hosting
- Repository: `kotapatiharipriya/kotapatiharipriya.github.io` (user site, base path is `/`).
- Workflow: `.github/workflows/deploy.yml` builds on pushes to `main` and deploys `dist/` to Pages.
- Assets: All images/PDFs live under `public/` (including `public/outputs/*` for project previews) and are referenced via the Vite base-aware `assetPath` helper.
- No manual `dist` commit needed; CI handles build + deploy.

If you fork/use a project page instead of a user site, set `VITE_BASE_PATH` to `/<repo>/` when building.

## 📁 Structure
```
src/
├── components/        # Page sections
│   ├── ui/            # Core UI primitives (button, dialog, input, toast, etc.)
│   ├── Navbar.tsx … Footer.tsx
│   └── Projects.tsx   # Uses real outputs from public/outputs
├── pages/             # Index + NotFound
├── hooks/             # use-toast
├── lib/               # assetPath, utilities
└── index.css          # Global theme and utilities

public/
├── outputs/           # Project outputs used as previews
├── documents/         # Resume and certificates (PDF)
├── cert-*.png         # Certificate thumbnails
└── favicon.svg, robots.txt
```

## 📝 License
© 2025 Haripriya Kotapati. All rights reserved.
