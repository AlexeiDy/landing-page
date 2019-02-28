global.$ = {
  path: {
    task: require('./gulp/paths/tasks.js'),
    devDir: './src/',
    distDir: './dist/',
    builtDir: './built/'
  },
  gulp: require('gulp'),
  del: require('del'),
  webpack: require('webpack-stream'),
  cssMqpacker: require('css-mqpacker'),
  autoprefixer: require('autoprefixer'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')({
    rename: {
      'gulp-tinypng-extended': 'tinypng'
    }
  })
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
  'clean',
  $.gulp.parallel(
  'pug', 
  'sass',
  'webpack',
  'fonts:copy',
  'images:copy',
  'extras',
  $.gulp.series('svg', 'svg:copy')
  )
));

$.gulp.task('build', $.gulp.series(
  'clean:build',
  $.gulp.parallel(
  'pug:build',
  'css:build',
  'webpack:build',
  'fonts:copy:build',
  'images:build',
  $.gulp.series('svg','svg:copy:build'),
  'extras:build')
));

$.gulp.task('default', $.gulp.series(
  'dev',
  $.gulp.parallel(
    'watch', 
    'serve'
  )
));