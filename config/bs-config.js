
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */

const fallback = require('connect-history-api-fallback');
const log = require('connect-logger');

module.exports = {
  injectChanges: false, // workaround for Angular 2 styleUrls loading
  files: [ './**/*.{html,htm,css,js}' ],
  watchOptions: {
    ignored: 'node_modules'
  },
  server: {
    baseDir: './',
    middleware: [
      log({ format: '%date %status %method %url' }),
      fallback({
        index: '/src/index.html',
        htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'] // systemjs workaround
      })
    ]
  }
};
