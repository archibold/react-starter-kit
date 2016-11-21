/**
 * Reapp Development Server
 *
 */

/* eslint no-process-env:0, quote-props:0 */

const webpack = require('webpack');
const reappDevTools = require('reapp-dev-tools');
let webpackConfig = require('../config/webpack.config');
const reappCfg = require('../config/reapp.conf');
const appEnv = require('../app/env');

/* reapp: start */
const reapp = require('reapp-dev-tools/lib/server/reapp');

reapp.init(process.cwd(), reappCfg);

// run styleguide
if (reapp.isStyleguideActive()) {
  /* eslint global-require:0 */
    webpackConfig = require('../config/webpack.config.guide');
    webpackConfig.plugins = webpackConfig.plugins.map((plugin) => {
        if (plugin instanceof webpack.DefinePlugin) {
            return new webpack.DefinePlugin(Object.assign({}, reappDevTools.json2env(appEnv), {
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                '__STYLEGUIDE__': JSON.stringify(reapp.getStyleguideInfo()),
            }));
        }
        return plugin;
    });
}

// run dev-server
reapp.start(webpackConfig);
