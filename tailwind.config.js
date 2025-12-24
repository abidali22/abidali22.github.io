// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        // Modern Slate Palette for backgrounds/text
        background: {
          light: '#f8fafc', // slate-50
          dark: '#0f172a',  // slate-900
        },
        text: {
          light: '#334155', // slate-700
          dark: '#e2e8f0',  // slate-200
        },
        // Primary Brand Colors (Deep Teal/Cyan)
        primary: {
          light: '#0e7490', // cyan-700
          DEFAULT: '#06b6d4', // cyan-500
          dark: '#22d3ee',  // cyan-400
        },
        // Header specific
        header: {
          light: 'rgba(255, 255, 255, 0.8)',
          dark: 'rgba(15, 23, 42, 0.8)',
        }
      },
    },
  },
  plugins: [],
};
