module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        right:
          '1px 0 3px 0 rgba(0, 0, 0, 0.1), 1px 0 2px 0 rgba(0, 0, 0, 0.06)',
      },
      colors: {
        primary: '#247ad2',
        secondary: '#39afe5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
