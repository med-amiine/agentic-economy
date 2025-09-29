# Bond Credit - Next.js Website

A modern, optimized Next.js website for Bond Credit's agentic banking platform.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 📱 **Responsive Design** optimized for all devices
- 🚀 **Performance Optimized** with SWC minification
- 🔧 **TypeScript** for type safety
- 🎯 **SEO Optimized** with proper meta tags

## Newsletter Integration

The newsletter subscription is currently set up with a fallback system. To enable full Mailchimp integration:

### Current Status
- ✅ Newsletter form is working
- ✅ Email validation is active
- ⚠️ Currently using simulation mode (emails are logged but not sent to Mailchimp)

### To Enable Mailchimp Integration

1. **Get Mailchimp Credentials:**
   - Go to [Mailchimp API Keys](https://us1.admin.mailchimp.com/account/api/)
   - Create a new API key
   - Copy the API key (ends with something like `-us21`)
   - Go to [Mailchimp Lists](https://us1.admin.mailchimp.com/lists/)
   - Select your list and copy the List ID

2. **Update the API:**
   - Open `pages/api/newsletter.ts`
   - Uncomment the Mailchimp integration code (lines 35-70)
   - Replace `your_api_key_here` with your actual API key
   - Replace `your_list_id_here` with your actual List ID
   - Comment out the simulation code (lines 21-33)

3. **Test the Integration:**
   - Restart the development server
   - Test the newsletter form
   - Check Mailchimp dashboard for new subscribers

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

## Animation Features

- **Typing Animation**: Dynamic text typing effect for hero section
- **Loading Progress**: Animated progress bar with percentage display
- **Smooth Transitions**: Hover effects and smooth state changes
- **Responsive Animations**: Optimized for different screen sizes
