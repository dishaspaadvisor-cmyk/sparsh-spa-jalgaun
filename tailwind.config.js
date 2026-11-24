/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4AF37',
          50: '#fbf9f4',
          100: '#f6f1e4',
          200: '#eddcb9',
          300: '#e3c68e',
          400: '#d4af37',
          500: '#bc962b',
          600: '#9d7521',
          700: '#7e5a1b',
          800: '#644719',
          900: '#523a18',
        },
        secondary: {
          DEFAULT: '#D4AF37', // Gold
          50: '#fbf7e7',
          100: '#f5ebc2',
          200: '#ebd885',
          300: '#dfc052',
          400: '#d4af37', // Main accent color (Golden)
          500: '#bc962b',
          600: '#9d7521',
          700: '#7e5a1b',
          800: '#644719',
          900: '#523a18',
        }
      },
    },
  },
  plugins: [],
}
