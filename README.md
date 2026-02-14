# Skin Microbiome Explorer 🔬

A modern web application for exploring and analyzing skin microbiome data. Built with React, Next.js, and TypeScript.

## 📋 Project Overview

This application displays information about bacteria and fungi that live on human skin, allowing users to:

- View a list of microorganisms with detailed information
- Filter by type (bacteria/fungi)
- Sort by relative abundance (ascending/descending)
- Explore their roles (beneficial/neutral/pathogenic)

## 🚀 How to Run the Project Locally

### Prerequisites

- Node.js 18+ installed on your machine
- npm, yarn, pnpm, or bun package manager

### Installation Steps

1. Clone the repository:

```bash
git clone <repository-url>
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
│   ├── api/
│   │   ├── microbes/         # API route for microbes data
│   │   └── stats/            # API route for statistics
│   ├── globals.css           # Global styles and CSS variables
│   ├── layout.tsx            # Root layout with SEO metadata
│   ├── page.tsx              # Main page (Server Component)
│   ├── page.module.css       # Page-specific styles
│   ├── loading.tsx           # Loading UI
│   ├── error.tsx             # Error boundary UI
│   ├── not-found.tsx         # 404 page
│   └── sitemap.ts            # Dynamic sitemap generation
├── components/
│   ├── FilterMicrobes/       # Filter controls component
│   ├── MicrobeExplorer/      # Main explorer (Client Component)
│   ├── MicrobeItem/          # Individual microbe card component
│   ├── MicrobeList/          # Microbe list container component
│   └── SortMicrobes/         # Sort controls component
├── data/
│   └── microbes.ts           # Static mock data with taxonomy
├── types/
│   └── microbe.ts            # TypeScript type definitions
├── utils/
│   └── filterSort.ts         # Utility functions
└── middleware.ts             # Edge middleware for security headers
public/
├── icon.svg                  # App icon
├── manifest.json             # PWA manifest
└── robots.txt                # SEO robots file
```

## ⚡ Next.js Features Implementation

This project leverages modern Next.js 15 features:

### 🎯 App Router Architecture

- **Server Components** - Main page renders on server for better performance
- **Client Components** - Interactive UI marked with 'use client'
- **File-based Routing** - Automatic routing based on folder structure

### 🔧 API Routes

- **REST API endpoints** at `/api/microbes` and `/api/stats`
- GET and POST methods support
- Type-safe responses with TypeScript

### 📊 SEO & Metadata

- **Comprehensive metadata** - Title, description, keywords
- **Open Graph tags** - Social media preview support
- **Twitter Card** - Optimized Twitter sharing
- **Structured Data** - JSON-LD schema for search engines
- **Dynamic sitemap** - Auto-generated sitemap.xml
- **robots.txt** - Search engine crawling configuration

### 🎨 Error Handling

- **error.tsx** - Global error boundary with retry functionality
- **loading.tsx** - Suspense loading states
- **not-found.tsx** - Custom 404 page

### 🔒 Security & Performance

- **Middleware** - Edge middleware for security headers
- **Font Optimization** - next/font for automatic font optimization
- **PWA Support** - Web app manifest for installability
- **CSP Headers** - Content Security Policy headers

### 🌐 Environment Variables

- `.env.local` - Local development configuration
- `.env.example` - Template for environment variables
- `NEXT_PUBLIC_BASE_URL` for deployment configuration

## 🎨 Features

### Current Features

- ✅ Display list of microorganisms
- ✅ Filter by type (all/bacteria/fungi)
- ✅ Sort by abundance (ascending/descending)
- ✅ Beautiful, responsive UI with CSS Modules
- ✅ Animated components and interactions
- ✅ Dark mode support
- ✅ TypeScript for type safety
- ✅ Visual indicators for microbe roles
- ✅ Abundance visualization with progress bars
- ✅ Statistics dashboard
- ✅ **Server-side rendering** (Next.js Server Components)
- ✅ **API Routes** for data endpoints
- ✅ **SEO optimized** with comprehensive metadata
- ✅ **Error boundaries** and loading states
- ✅ **PWA ready** with manifest
- ✅ **Security headers** via middleware

### Design Highlights

- 🎨 Modern gradient-based design
- 🌈 Color-coded microbe types and roles
- ✨ Smooth animations and transitions
- 📱 Fully responsive layout
- 🌙 Automatic dark mode s 5
- **Styling:** CSS Modules
- **React:** 19
- **Node.js:** 18+
- **Features:**
  - Server & Client Components
  - API Routes
  - Middleware6-7 hours were spent on this project:

- Project setup and structure: 30 min
- Component development: 2 hours
- Styling and animations: 1.5 hours
- Next.js features implementation: 1.5 hours
- SEO, API routes, error handling: 1 hour
- Testing and refinements: 30 min

The application includes REST API endpoints:

### GET `/api/microbes`

Returns all microorganisms data

```json
{
  "success": true,
  "data": [...],
  "count": 20
}
```

### POST `/api/microbes`

Filter microorganisms by type and role

```json
{
  "type": "bacteria",
  "role": "beneficial"
}
```

### GET `/api/stats`

Get statistics about the dataset

````json
{
  "success": true,
  "data": {
    "types": ["bacteria", "fungi"],
    "roles": ["beneficial", "neutral", "pathogenic"],
    "totalSpecies": 20
  }
}
```s Used

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules
- **React:** 19
- **Node.js:** 18+

## ⏱️ Time Spent

Approximately 4-5 hours were spent on this project:

- Project setup and structure: 30 min
- Component development: 2 hours
- Styling and animations: 1.5 hours
- Testing and refinements: 1 hour

## 🔮 Future Improvements

Given more time, I would implement:

### Features

- [ ] Search functionality by microbe name
- [ ] Advanced filtering (by role, abundance range)
- [ ] Data visualization charts (pie chart for type distribution, bar chart for abundance)
- [ ] Detailed view/modal for each microbe with more information
- [ ] Favorites/bookmarking system
- [ ] Export data functionality (CSV, JSON)
- [ ] Comparison mode to compare multiple microbes

### Technical Enhancements

- [ ] Unit tests with Jest and React Testing Library
- [ ] E2E tests with Playwright
- [ ] Accessibility improvements (ARIA labels, keyboard navigation)
- [ ] Performance optimization with React.memo and useMemo
- [ ] Backend integration with API routes
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Authentication and user profiles
- [ ] PWA support for offline access
- [ ] Internationalization (i18n)

### UI/UX

- [ ] More sophisticated animations with Framer Motion
- [ ] Loading states and skeletons
- [ ] Error boundaries and error handling
- [ ] Toast notifications for user actions
- [ ] Theme customization options
- [ ] Print-friendly view
- [ ] Share functionality

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
npm start
````

### Deploy on Vercel

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

## 📝 License

This project was created as a technical challenge assignment.

---

Built with ❤️ for microbiome research
