module.exports = function() {
  $.gulp.task('fonts:copy', () => {
    return $.gulp.src($.path.devDir + 'fonts/**/*.*',{ since: $.gulp.lastRun('fonts:copy')})
      .pipe($.gulp.dest($.path.distDir + 'fonts/'));
  });

   $.gulp.task('fonts:copy:build', () => {
      return $.gulp.src($.path.devDir + 'fonts/**/*.*')
          .pipe($.gulp.dest($.path.builtDir + 'fonts/'));
  });
};
