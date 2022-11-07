/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#6278F7',
          cian: '#95FFD4',
          gray: '#F2F2F2',
        },
        bg: {
          green:'#D9F7E9',
          blue:'#E8F8FF',
          lightGreen:'#F0F8E2',
          red:'#FDE7E8',
          pink:'#FAE9F5',
          orange:'#FFF5D9',
          darkOrange:'#FFEEDF',
        },
        contrast: {
          green:'#57C278',
          blue:'#82CFFA',
          lightGreen:'#A6D157',
          red:'#E06B69',
          pink:'#DB6EBF',
          orange:'#FFBA05',
          darkOrange:'#FF8A29',
        },
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '20px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
      }
    },
  },
  plugins: [],
}
