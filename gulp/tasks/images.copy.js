module.exports = function() {
  $.gulp.task('images:copy', () => {
    return $.gulp.src($.path.devDir + 'img/**/*.{png,jpg,gif}', { since: $.gulp.lastRun('images:copy')})
      .pipe($.gulp.dest($.path.distDir + 'img/'));
  });

  $.gulp.task('images:build', () => {
    return $.gulp.src($.path.devDir + 'img/**/*.{png,jpg,gif}')
      .pipe($.gp.tinypng({
          key: 'pbDs0-CQsFlv8GGaFMRAuXAqTBE4cS5-',
          log: true,
          summarize: true
      }))
      .pipe($.gulp.dest($.path.builtDir + 'img/'));
  });
};
