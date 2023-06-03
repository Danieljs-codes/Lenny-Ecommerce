/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['Clash Grotesk', 'sans-serif'],
      },
      colors: {
        'green': '#1E4C2F'
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
