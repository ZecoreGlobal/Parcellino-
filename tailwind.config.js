/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '.dark'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'swiss-red': '#D52B1E',
        'swiss-dark': '#1A1A1A',
        'swiss-grey': '#F5F5F5',
        'swiss-light-grey': '#F9F9F9',
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
