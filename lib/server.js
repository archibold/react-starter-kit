/**
 * Reapp Development Server
 *
 */

/* eslint no-process-env:0, quote-props:0 */
const webpackConfig = require('../config/webpack.config');
const reappCfg = require('../config/reapp.conf');

/* reapp: start */
const reapp = require('reapp-dev-tools/lib/server/reapp');

reappCfg.port = process.env.PORT || reappCfg.port;
reapp.init(process.cwd(), reappCfg);

// run dev-server
reapp.start(webpackConfig);
