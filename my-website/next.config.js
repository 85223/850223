/*const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  reactStrictMode: true,
  sassOptions: {
    quietDeps: true,
  },
  images: {
    disableStaticImages: true,
  },
  handleImages: ['jpeg', 'png', 'svg'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
    });

    return config;
  },
});*/

module.exports = {
  images: {
    loader: 'imgix',
    path: '/',
  },
};
