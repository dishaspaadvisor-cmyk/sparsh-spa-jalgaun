/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        ivory: '#FAF8F4',
        sand: '#F2EDE4',
        forest: {
          DEFAULT: '#1B2620',
          light: '#2A3B32',
          deep: '#121A15',
        },
        primary: {
          DEFAULT: '#B88E2F',
          50: '#FBF9F4',
          100: '#F6F1E4',
          200: '#EDDCB9',
          300: '#E3C68E',
          400: '#D4AF37',
          500: '#B88E2F',
          600: '#9A741F',
          700: '#7E5A1B',
          800: '#644719',
          900: '#523A18',
        },
      },
    },
  },
  plugins: [],
};
