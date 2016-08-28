var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var source = require('vinyl-source-stream');

gulp.task('reload', browserSync.reload);

gulp.task('build-js', function() {
    return browserify({
      entries: ['./app/src/index.js'],
      transform: babelify
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('rebuild-js', ['build-js'], browserSync.reload);

gulp.task('watch-files', function() {
  gulp.watch([
    'index.html',
    './app/assets/css/styles.css'
  ], ['reload']);
  gulp.watch([
    './app/src/!(index)/*.js'
  ], ['rebuild-js']);
});

gulp.task('init', function() {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'index.html'
    }
  });
});

gulp.task('default', ['build-js', 'watch-files', 'init']);
