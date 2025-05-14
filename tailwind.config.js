// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '744px',
        lg: '1480px',
      },
    },
  },
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  plugins: [],
}