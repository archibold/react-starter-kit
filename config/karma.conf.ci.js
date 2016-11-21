
const karmaConf = require('./karma.conf.js');

module.exports = (config) => {
    karmaConf(config);
    config.set({
        singleRun: false,
    });
};
