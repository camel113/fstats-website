var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var cp = require('child_process');
var gutil = require('gulp-util');
var run = require('gulp-run');
var sass = require('gulp-sass');

const base_path = './';
var assetsDevDir = {
  path: base_path + '_assets/',
}
assetsDevDir.styles = assetsDevDir.path + 'styles/*.scss';
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
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: '_site'
    },
    port: 4000
  });
  gulp.watch(jekyllDir.jekyll, ['build:jekyll:watch']);
  gulp.watch(assetsDevDir.styles, ['sass:dev']);
});

gulp.task('build:jekyll:dev', function() {
    var shellCommand = 'bundle exec jekyll build --config _config.yml';
    return gulp.src('')
      .pipe(run(shellCommand))
      .on('error', gutil.log);
});
gulp.task('build:jekyll:watch', ['build:jekyll:dev'], function(callback) {
    browserSync.reload();
    callback();
});
gulp.task('sass:dev', function () {
  return gulp.src(assetsDevDir.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(siteDir.assets.styles))
    .pipe(reload({stream: true}));
});
gulp.task('sass:prod', function () {
  return gulp.src(assetsDevDir.styles)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(jekyllDir.assets.styles))
});