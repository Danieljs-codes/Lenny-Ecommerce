// vite.config.js
export default {
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        product: 'product-detail.html',
        search: 'search.html',
      },
    },
  },
};
