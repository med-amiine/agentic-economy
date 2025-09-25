/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        primary: {
          50: '#F0F4FF',
          100: '#E0E9FF',
          200: '#C7D6FF',
          300: '#A5B8FF',
          400: '#8194FF',
          500: '#2C5BFF', // bond-blue
          600: '#1E40FF',
          700: '#1A3AE6',
          800: '#1A2ECC',
          900: '#1A26B3',
        },
        // Neutral Colors
        neutral: {
          50: '#F6F8FF', // cloud
          100: '#F1F3F4',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280', // slate
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#0A0D14', // night
        },
        // Semantic Colors
        success: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#21C07A',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#FFB020',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        // Legacy color mappings for backward compatibility
        'bond-blue': '#2C5BFF',
        'night': '#0A0D14',
        'cloud': '#F6F8FF',
        'slate': '#6B7280',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Pixel-based font sizes for consistency
        'xs': ['12px', { lineHeight: '1.3' }],
        'sm': ['14px', { lineHeight: '1.4' }],
        'base': ['16px', { lineHeight: '1.5' }],
        'lg': ['18px', { lineHeight: '1.6' }],
        'xl': ['20px', { lineHeight: '1.4' }],
        '2xl': ['24px', { lineHeight: '1.3' }],
        '3xl': ['30px', { lineHeight: '1.2' }],
        '4xl': ['36px', { lineHeight: '1.1' }],
        '5xl': ['48px', { lineHeight: '1' }],
        '6xl': ['60px', { lineHeight: '0.9' }],
        '7xl': ['72px', { lineHeight: '0.9' }],
        '8xl': ['96px', { lineHeight: '0.8' }],
        '9xl': ['128px', { lineHeight: '0.8' }],
        // Responsive font sizes
        'hero': ['clamp(32px, 8vw, 128px)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display': ['clamp(28px, 6vw, 96px)', { lineHeight: '1', letterSpacing: '-0.01em' }],
        'title': ['clamp(24px, 4vw, 48px)', { lineHeight: '1.2' }],
        'subtitle': ['clamp(18px, 2.5vw, 24px)', { lineHeight: '1.4' }],
        'body': ['clamp(14px, 2vw, 18px)', { lineHeight: '1.6' }],
        'caption': ['12px', { lineHeight: '1.4' }],
        'small': ['10px', { lineHeight: '1.3' }],
      },
      spacing: {
        // Pixel-based spacing scale
        '0': '0px',
        'px': '1px',
        '0.5': '2px',
        '1': '4px',
        '1.5': '6px',
        '2': '8px',
        '2.5': '10px',
        '3': '12px',
        '3.5': '14px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '11': '44px',
        '12': '48px',
        '14': '56px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '28': '112px',
        '32': '128px',
        '36': '144px',
        '40': '160px',
        '44': '176px',
        '48': '192px',
        '52': '208px',
        '56': '224px',
        '60': '240px',
        '64': '256px',
        '72': '288px',
        '80': '320px',
        '96': '384px',
        // Custom spacing
        '18': '72px',
        '88': '352px',
        '128': '512px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 2s linear infinite',
        'typing': 'typing 0.15s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        typing: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(44, 91, 255, 0.3)',
        'glow-success': '0 0 20px rgba(33, 192, 122, 0.3)',
        'glow-warning': '0 0 20px rgba(255, 176, 32, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    function({ addUtilities, addComponents, theme }) {
      // Custom utilities
      addUtilities({
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.scroll-smooth': {
          'scroll-behavior': 'smooth',
        },
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.transform-gpu': {
          'transform': 'translate3d(0, 0, 0)',
        },
      });

      // Custom components with pixel-based values
      addComponents({
        '.btn-primary': {
          '@apply bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-primary-600 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2': {},
        },
        '.btn-secondary': {
          '@apply border-2 border-primary-500 text-primary-500 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-primary-500 hover:text-white hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2': {},
        },
        '.btn-ghost': {
          '@apply text-neutral-600 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2': {},
        },
        '.card': {
          '@apply bg-white rounded-xl shadow-soft border border-neutral-200 overflow-hidden': {},
        },
        '.card-hover': {
          '@apply card transition-all duration-300 hover:shadow-medium hover:-translate-y-1': {},
        },
        '.input': {
          '@apply w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors': {},
        },
        '.section-padding': {
          '@apply py-16 md:py-20 lg:py-24': {},
        },
        '.container-custom': {
          '@apply max-w-7xl mx-auto px-6 lg:px-8': {},
        },
        '.container-responsive': {
          '@apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8': {},
        },
        '.heading-1': {
          '@apply text-hero font-bold font-heading text-neutral-900 leading-tight': {},
        },
        '.heading-2': {
          '@apply text-display font-bold font-heading text-neutral-900 leading-tight': {},
        },
        '.heading-3': {
          '@apply text-title font-bold font-heading text-neutral-900 leading-tight': {},
        },
        '.body-text': {
          '@apply text-body text-neutral-600 leading-relaxed': {},
        },
        '.caption-text': {
          '@apply text-caption font-mono text-neutral-500 uppercase tracking-wider': {},
        },
        // Additional utility components
        '.glass': {
          '@apply bg-white/10 backdrop-blur-md border border-white/20': {},
        },
        '.glass-dark': {
          '@apply bg-black/10 backdrop-blur-md border border-white/10': {},
        },
        '.hover-lift': {
          '@apply transition-all duration-300 hover:-translate-y-2 hover:shadow-xl': {},
        },
        '.text-gradient-animated': {
          '@apply bg-gradient-to-r from-primary-500 via-primary-600 to-blue-400 bg-clip-text text-transparent animate-gradient': {},
        },
        '.shimmer': {
          '@apply bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200px_100%] animate-pulse': {},
        },
      });
    },
  ],
};