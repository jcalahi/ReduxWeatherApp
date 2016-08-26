var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var source = require('vinyl-source-stream');

gulp.task('build-js', function() {
    return browserify({
      entries: ['./app/src/components/main.js'],
      transform: babelify
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./app/'));
});

gulp.task('rebuild-js', ['build-js'], browserSync.reload);

gulp.task('watch-files', function() {
  gulp.watch([
    './app/*.html'
  ], browserSync.reload);
  gulp.watch([
    './app/src/**/*.js'
  ], ['rebuild-js']);
});

gulp.task('init', function() {
  browserSync.init({
    server: ['app'],
    browser: 'Chrome'
  });
});

gulp.task('default', ['build-js', 'watch-files', 'init']);
