/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'search.html', 'product-detail.html', 'shopping-cart.html', './src/**/*.{js,html,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['Clash Grotesk', 'sans-serif'],
      },
      colors: {
        'green': '#1E4C2F',
        'black-tint': '#0b0f0e',
        'grey-01': '#818B9C',
        'grey-02': '#E4E9EE',
        'grey-03': '#F7F7F7',
        'grey-04': '#F6F6F6',
        'green-02': '#1D9E34',
        'danger': '#E04124'
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
