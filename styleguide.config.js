/* eslint global-require: 0 */
module.exports = {
  components: 'app/client/components/**/[A-Z]*.js',
  webpackConfig: require('./config/webpack.config.js'),
};
