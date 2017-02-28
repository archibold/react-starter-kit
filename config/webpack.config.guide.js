
const config = require('./webpack.config');
const reappConf = require('./reapp.conf');

config.entry = {
  guide: [
    `webpack-dev-server/client?http://${reappConf.host}:${reappConf.port}`,
    'webpack/hot/only-dev-server',
    './lib/styleguide',
  ],
};

module.exports = config;
