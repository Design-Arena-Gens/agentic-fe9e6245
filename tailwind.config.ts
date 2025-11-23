import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f7ff',
          100: '#e0eeff',
          200: '#b9daff',
          300: '#7fbaff',
          400: '#4699ff',
          500: '#1b6ff0',
          600: '#0f56ce',
          700: '#0c44a8',
          800: '#0d3a88',
          900: '#0f316f',
        },
        accent: '#00d4ff',
        slate: {
          950: '#0a1524',
        },
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(circle at top, rgba(0, 212, 255, 0.35), rgba(27, 111, 240, 0.1) 45%, rgba(10, 21, 36, 0.8))',
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 0), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 0)',
      },
      boxShadow: {
        'glow-brand': '0 0 45px rgba(0, 212, 255, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
