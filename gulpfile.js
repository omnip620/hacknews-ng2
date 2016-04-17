var gulp = require('gulp');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');


gulp.task('compile', function () {
  var tsProject = ts.createProject('tsconfig.json', {sortOutput: true});
  var tsResult = tsProject.src('app/**/*.ts')
    .pipe(ts(tsProject));
  return tsResult.js.pipe(gulp.dest('app'));
});

gulp.task('default', ['compile'], function () {
  gulp.watch(['app/**/*.html', 'app/**/*.css'], ['compile']);
});