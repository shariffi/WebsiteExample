/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a192f',
          light: '#112240',
          dark: '#020617'
        },
        accent: {
          DEFAULT: '#64ffda',
          light: '#a8fff1',
          dark: '#0fb',
        }
      },
      animation: {
        'outline': 'outline-animation 2s linear infinite',
        'float': 'floating 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};