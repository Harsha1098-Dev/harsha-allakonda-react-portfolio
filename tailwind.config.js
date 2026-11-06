/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B1849',
          800: '#14255C',
          700: '#1D3270',
        },
        forest: {
          700: '#134E28',
          800: '#0E3A1E',
        },
        gold: {
          500: '#E5B83B',
          600: '#C99F2D',
        },
        cream: '#F4F6F0'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.25s ease-out forwards',
      }
    },
  },
  plugins: [],
}
