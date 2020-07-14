var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: (config) => {
    // Perform customizations to webpack config
    config.plugins.push(new CaseSensitivePathsPlugin());
    return config;
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    return config;
  },
});