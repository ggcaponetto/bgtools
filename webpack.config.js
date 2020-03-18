const path = require('path');

module.exports = {
  entry: './src/tools/bg-fetch/bg-fetch-sw.js',
  output: {
    filename: 'bg-fetch-sw.min.js',
    path: path.resolve(__dirname, 'public/dist/tools/bg-fetch'),
  },
};
