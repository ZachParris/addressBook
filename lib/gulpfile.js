"use strict";
        
    var gulp = require('gulp');
    var watch = require('gulp-watch');
    var jshint = require('gulp-jshint');
    var sass = require('gulp-sass');

gulp.task('default', ['watch', 'lint', 'sass']);

gulp.task('watch', function() {
  gulp.watch('../javascripts/**/*.js', ['lint']);
  gulp.watch('../sass/**/*.scss', ['sass']);
});

gulp.task('lint', function() {
  return gulp.src('../javascripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function () {
  return gulp.src('../sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../styles'));
});