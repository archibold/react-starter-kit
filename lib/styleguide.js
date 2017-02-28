/**
 * Reapp Styleguide
 *
 */

// customize the styleguide here
/* eslint no-undef:0 */
const styleguideTargetEl = document.getElementById('app');
const reappConf = require('../config/reapp.conf');

// import app's stylesheet
require('../app/client/index.scss');

/* globals __STYLEGUIDE__ */
const styleguideInfo = __STYLEGUIDE__;

import {
    renderMultiComponents,
    renderStyleguideInfo,
} from 'reapp-dev-tools';

try {
  renderMultiComponents(
    styleguideTargetEl,
    styleguideInfo.cwd,
    styleguideInfo.components.map((component) => {
      let StyleguidePage;
      /* eslint-disable */
      if (component.plugin) {
          StyleguidePage = require('../app/plugins/' + component.plugin + '/styleguide/' + component.guideFile);

      } else {
          StyleguidePage = require('../app/styleguide/' + component.guideFile);
      }
      /* eslint-enable */
      return {
        name: component.guideFile,
        def: StyleguidePage,
        info: component,
      };
    }),
    styleguideInfo.sources,
    reappConf.appName,
  );
} catch (e) {
  renderStyleguideInfo(
    styleguideTargetEl,
    styleguideInfo.cdw,
    e,
    reappConf.appName,
  );
}
