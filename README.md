# Skin Microbiome Explorer 🔬

A modern web application for exploring and analyzing skin microbiome data. Built with React, Next.js, TypeScript, and Zustand for global state management.

## 📋 Project Overview

This application displays information about bacteria and fungi that live on human skin, allowing users to:

- View a list of microorganisms with detailed information
- Filter by type (bacteria/fungi)
- Sort by relative abundance (ascending/descending)
- Explore their roles (beneficial/neutral/pathogenic)
- Use a global state (Zustand) for all UI controls
- Instantly scroll to top with a floating button

## 🚀 How to Run the Project Locally

### Prerequisites

- Node.js 18+ installed on your machine
- npm, yarn, pnpm, or bun package manager

### Installation Steps

1. Clone the repository:

```bash
git clone https://github.com/AlenaHavaleshko/hellobiome-tech-app
cd hellobiome-tech-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css           # Global styles and CSS variables
│   ├── layout.tsx            # Root layout with SEO metadata
│   ├── page.tsx              # Main page (Server Component)
├── components/
│   ├── FilterMicrobes/       # Filter controls (uses Zustand)
│   ├── MicrobeExplorer/      # Main explorer (Client Component)
│   ├── MicrobeItem/          # Individual microbe card component
│   ├── MicrobeList/          # Microbe list container component
│   ├── Pagination/           # Pagination (uses Zustand)
│   └── SortMicrobes/         # Sort controls (uses Zustand)
├── data/
│   └── microbes.ts           # Static mock data with taxonomy
├── store/
│   └── useGlobalStore.ts     # Zustand global state store
├── types/
│   └── microbe.ts            # TypeScript type definitions
├── utils/
│   └── filterSort.ts         # Utility functions
public/
├── icon.svg                  # App icon
├── manifest.json             # PWA manifest
└── robots.txt                # SEO robots file
```

## ⚡ Next.js & Zustand Features

- **App Router Architecture** (Next.js 15+)
- **Server Components** for performance
- **Client Components** for interactivity
- **Global state management** with Zustand (filter, sort, pagination)
- **No prop drilling**: all controls sync via store
- **Floating scroll-to-top button** (appears when scrolled down)

## 🎨 Features

- ✅ Display list of microorganisms
- ✅ Filter by type (all/bacteria/fungi) — global state
- ✅ Sort by abundance (ascending/descending) — global state
- ✅ Pagination — global state
- ✅ Beautiful, responsive UI with CSS Modules
- ✅ Animated components and interactions
- ✅ TypeScript for type safety
- ✅ Visual indicators for microbe roles
- ✅ Abundance visualization with progress bars
- ✅ Statistics dashboard
- ✅ **Server-side rendering** (Next.js Server Components)
- ✅ **SEO optimized** with comprehensive metadata
- ✅ **Error boundaries** and loading states
- ✅ **PWA ready** with manifest
- ✅ **Security headers** via middleware
- ✅ **Scroll-to-top button** in lower right corner

### Design Highlights

- 🎨 Modern yellow/beige palette, organic shapes, V-shaped header
- 🌈 Color-coded microbe types and roles
- ✨ Smooth animations and transitions
- 📱 Fully responsive layout
- 🖌️ Font-family: Poppins (matches hellobio.me)

## 📝 License

This project was created as a technical challenge assignment.

---

Built with ❤️ for microbiome research

## 🔮 What I would improve with more time

If I had more time, I would suggest the following improvements:

- Add search functionality for microbe names and taxonomy
- Implement advanced filtering (by role, abundance range, taxonomy)
- Add interactive data visualization (charts, graphs, heatmaps)
- Create detailed modal views for each microbe with more scientific info
- Add favorites/bookmarking and comparison features
- Enable export of data (CSV, JSON)
- Improve accessibility (ARIA, keyboard navigation)
- Add unit and E2E tests (Jest, Playwright)
- Optimize performance (memoization, lazy loading)
- Integrate backend/database for real data
- Add authentication and user profiles
- Support offline mode (PWA)
- Add internationalization (i18n)
- Enhance UI/UX with more animations, skeleton loaders, toast notifications
- Allow theme customization and print-friendly views
- Add share functionality for research and social media
