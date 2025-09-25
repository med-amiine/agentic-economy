# Bond Credit - Next.js Website

A modern, optimized Next.js website for Bond Credit's agentic banking platform.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 📱 **Responsive Design** optimized for all devices
- 🚀 **Performance Optimized** with SWC minification
- 🔧 **TypeScript** for type safety
- 🎯 **SEO Optimized** with proper meta tags

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── pages/                 # Next.js pages directory
│   ├── _app.tsx          # App component wrapper
│   ├── _document.tsx     # Custom HTML document
│   └── index.tsx         # Home page
├── src/
│   ├── components/       # React components
│   └── index.css        # Global styles with Tailwind CSS
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Technologies Used

- **Next.js 14** - React framework with SSR/SSG
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Performance Features

- React Strict Mode enabled
- SWC minification for faster builds
- Console removal in production
- Optimized font loading
- Static generation for better SEO
