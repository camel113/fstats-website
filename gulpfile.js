var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var cp = require('child_process');
var gutil = require('gulp-util');
var run = require('gulp-run');

// Set the path variables
const base_path = './',
  src = base_path + '_dev/src',
  dist = base_path + 'assets',
  paths = {  
    js: src + '/js/*.js',
    scss: [ src +'/sass/*.scss',
            src +'/sass/**/* .scss',
            src +'/sass/**/**/*.scss'],
    jekyll: ['index.html', '_posts/*', '_layouts/*', '_includes/*']
  };

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: '_site'
    },
    port: 4000
  });
  gulp.watch(paths.jekyll, ['build:jekyll:watch']);
});

gulp.task('build:jekyll:local', function() {
    var shellCommand = 'bundle exec jekyll build --config _config.yml';

    return gulp.src('')
      .pipe(run(shellCommand))
      .on('error', gutil.log);
});
gulp.task('build:jekyll:watch', ['build:jekyll:local'], function(callback) {
    browserSync.reload();
    callback();
});