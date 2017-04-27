var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var cp = require('child_process');
var gutil = require('gulp-util');
var run = require('gulp-run');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pump = require('pump');
var runSequence  = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
var swPrecache = require('sw-precache');

const base_path = './';
var assetsDevDir = {
  path: base_path + '_assets/',
}
assetsDevDir.styles = assetsDevDir.path + 'styles/**/*.scss';
assetsDevDir.js = assetsDevDir.path + 'js/*.js';
var siteDir = {
  path: base_path + '_site/',
  assets: {}
};
siteDir.assets.path = siteDir.path + 'assets/';
siteDir.assets.styles = siteDir.assets.path + 'styles/';
siteDir.assets.js = siteDir.assets.path + 'js/'
var jekyllDir = {
  assets: {
    path: base_path + 'assets/',
  }
};
jekyllDir.assets.styles = jekyllDir.assets.path + 'styles/';
jekyllDir.assets.js = jekyllDir.assets.path + 'js/';
jekyllDir.jekyll = ['./*.html', '_posts/*', '_layouts/*', '_includes/*']

// watch files for changes and reload
gulp.task('serve',['build'], function() {
  browserSync({
    server: {
      baseDir: '_site',
      serveStaticOptions: {
        extensions: ["html"]
      }
    },
    port: 4000
  });
  gulp.watch(jekyllDir.jekyll, ['build:jekyll:watch']);
  gulp.watch(assetsDevDir.styles, ['sass:prod']);
  gulp.watch(assetsDevDir.js, ['js:prod']);
});
gulp.task('build:jekyll', function() {
    var shellCommand = 'bundle exec jekyll build --incremental --config _config.yml';
    return gulp.src('')
      .pipe(run(shellCommand))
      .on('error', gutil.log);
});
gulp.task('build:jekyll:watch', ['build:jekyll'], function(cb) {
  browserSync.reload();
  cb();
});
gulp.task('build', function(cb) {
  runSequence(['sass:prod', 'js:prod'],'build:jekyll',cb);
});
gulp.task('sass:prod', function () {
  return gulp.src(assetsDevDir.styles)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(jekyllDir.assets.styles))
    .pipe(gulp.dest(siteDir.assets.styles))
    .pipe(sourcemaps.write('./maps'))
    .pipe(reload({stream: true}));
});
gulp.task('js:prod', function (cb) {
  pump([
        gulp.src(assetsDevDir.js),
        uglify(),
        gulp.dest(jekyllDir.assets.js),
        gulp.dest(siteDir.assets.js)
    ],
    cb
  );
});

gulp.task('generate-service-worker', function(callback) {
  
  var rootDir = '_site';

  swPrecache.write(`./service-worker.js`, {
    staticFileGlobs: [rootDir + '/acvf/*.html',rootDir + '/anf/*.html',rootDir + '/aff/*.html',rootDir + '/acgf/*.html',rootDir + '/avf/*.html',rootDir + '/assets/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
    stripPrefix: rootDir
  }, callback);
});