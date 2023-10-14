/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      primary: ['SBAggroB', 'Arial', 'sans-serif'],
      basic: ['Pretendard', 'Arial', 'sans-serif'],
    },
    fontSize: {
      title: [
        '3rem',
        {
          lineHeight: '1.5',
        },
      ],
      subTitle: [
        '2rem',
        {
          lineHeight: '1.5',
        },
      ],
      mobileTitle: [
        '2rem',
        {
          lineHeight: '1.5',
        },
      ],
      mobileSubTitle: [
        '1.5rem',
        {
          lineHeight: '1.5',
        },
      ],
    },
    colors: {
      primary: '#4B9AFD',
      second: '#3398FF',
      black: '#222222',
      red: '#FF5A4F',
      darkGray: '#7E7E7E',
      lightGray: '#C1C1C1',
      background: '#F9FBFE',
      border: '#dedede',
    },
    extend: {
      backgroundImage: {
        happyPattern: "url('/images/background/happyPattern.png')",
        sadPattern: "url('/images/background/sadPattern.png')",
        pattern: "url('/images/background/pattern.png')",
      },
      height: {
        portfolioBottom: '300px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
