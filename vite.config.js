// vite.config.js
import fs from 'fs';
import path from 'path';

export default {
  build: {
    rollupOptions: {
      input: getHtmlEntryPoints(),
    },
  },
};

function getHtmlEntryPoints() {
  const entryPoints = {};
  const files = fs.readdirSync(__dirname);

  files.forEach(file => {
    const ext = path.extname(file);
    if (ext === '.html') {
      const name = path.basename(file, ext);
      entryPoints[name] = file;
    }
  });

  return entryPoints;
}

// export default {
//   build: {
//     rollupOptions: {
//       input: {
//         main: 'index.html',
//         product: 'product-detail.html',
//         search: 'search.html',
//       },
//     },
//   },
// };
