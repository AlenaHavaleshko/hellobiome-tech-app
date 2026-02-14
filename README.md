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
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx            # Root layout component
│   ├── page.tsx              # Main page component
│   └── page.module.css       # Page-specific styles
├── components/
│   ├── FilterMicrobes/       # Filter controls component
│   ├── MicrobeItem/          # Individual microbe card component
│   ├── MicrobeList/          # Microbe list container component
│   └── SortMicrobes/         # Sort controls component
├── data/
│   └── microbes.ts           # Static mock data
├── types/
│   └── microbe.ts            # TypeScript type definitions
└── utils/
    └── filterSort.ts         # Utility functions
```

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

### Design Highlights

- 🎨 Modern gradient-based design
- 🌈 Color-coded microbe types and roles
- ✨ Smooth animations and transitions
- 📱 Fully responsive layout
- 🌙 Automatic dark mode support
- 🎯 Clear visual hierarchy

## 🛠️ Technologies Used

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
```

### Deploy on Vercel

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

## 📝 License

This project was created as a technical challenge assignment.

---

Built with ❤️ for microbiome research
