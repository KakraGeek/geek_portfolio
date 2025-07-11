/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your custom color palette from the style guide
        'radiant-blue': '#0052CC',
        'vibrant-yellow': '#FFEB3B',
        'fresh-mint': '#4CAF50',
        'warm-coral': '#FF7043',
        'electric-purple': '#8E24AA',
        'sky-teal': '#00BCD4',
        'error-red': '#D32F2F',
        'soft-gray': '#E0E0E0',
        'dark-text': '#212121',
        'muted-placeholder': '#9E9E9E',
      },
      fontFamily: {
        'inter': ['Inter', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'input': '10px',
        'button': '8px',
      },
      spacing: {
        '18': '72px',
        '88': '352px',
      },
    },
  },
  plugins: [],
}
