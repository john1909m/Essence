/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Improved dark mode color palette with deeper colors
        'dark-bg': '#0f172a', // Deeper slate blue background
        'dark-surface': '#1e293b', // Slate 800
        'dark-surface-secondary': '#334155', // Slate 700
        'dark-text': '#f8fafc', // Slate 50
        'dark-text-secondary': '#cbd5e1', // Slate 300
        'dark-primary': '#818cf8', // Brighter indigo for better visibility
        'dark-primary-hover': '#6366f1', 
        'dark-accent': '#a78bfa', // Violet for accents
        'dark-accent-hover': '#8b5cf6',
        'dark-border': '#475569', // Slate 600
        'dark-card': '#1e293b', // Slate 800
        'dark-card-hover': '#334155', // Slate 700
        'dark-input': '#1e293b', // For form elements
        'dark-input-focus': '#334155',
        'dark-success': '#10b981', // Emerald 500
        'dark-error': '#ef4444', // Red 500
        'dark-warning': '#f59e0b', // Amber 500
        'dark-info': '#3b82f6', // Blue 500
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(to right, #1e293b, #0f172a)',
        'dark-card-gradient': 'linear-gradient(to bottom right, #334155, #1e293b)',
      },
    },
    // screens:{
    //   xs:"380px",
    //   sm:"480px",
    //   md:"720",
    //   lg:"900"
    // }
  },
  plugins: [],
}