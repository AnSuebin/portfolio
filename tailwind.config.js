/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      primary: ['SBAggroB', 'Arial', 'sans-serif'],
    },
    colors: {
      primary: '#4B9AFD',
      second: '#3398FF',
      red: '#FF5A4F',
      darkGray: '#313A47',
      lightGray: '#929BA4',
      background: '#F9FBFE',
      border: '#dedede',
    },
    extend: {},
  },
  plugins: [],
};
