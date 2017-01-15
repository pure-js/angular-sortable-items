const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const config = {
  paths: {
    copy: [
      'index-deploy.html',
      'styles.css',
      'systemjs.config.js'
    ],
    copyAsIs: [
      'app/*.html',
      'app/*.js',
      'node_modules/octicons/build/octicons.css',
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/systemjs/dist/system.src.js'
    ]
  }
}

function copy() {
  return gulp.src(config.paths.copy)
    .pipe(gulp.dest('./dist'));
}

function copyAsIs() {
  return gulp.src(config.paths.copyAsIs, {base: '.'})
    .pipe(gulp.dest('./dist'));
}

function deploy() {
  return gulp.src('./dist/**/*')
    .pipe(plugins.ghPages());
}

gulp.task('deploy', gulp.series(copy, copyAsIs, deploy));
