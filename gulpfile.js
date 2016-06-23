var gulp = require('gulp');
var less = require('gulp-less');  
var path = require('path');
var uglify = require('gulp-uglify');

var paths = {
  mainStyleSheet: 'less/main.less',
  lessStyles: 'less/*.less',
  js: 'js/dev/*.js'
}

gulp.task('mainCss', function () {  
  return gulp.src(paths.mainStyleSheet)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .on('error', function(err){ console.log(err.message); })
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function() {
  gulp.watch(paths.lessStyles, ['mainCss']);
  gulp.watch(paths.js, ['compress']);
});

gulp.task('compress', function() {
  gulp.src('js/dev/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js'))
});

gulp.task('default', ['watch'])

