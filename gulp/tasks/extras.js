module.exports = function() {
  $.gulp.task('extras', () => {
    return $.gulp.src([
        $.path.devDir+'*.*',
        $.path.devDir+'*/**/*.*',
        '!'+$.path.devDir+'fonts/**/*.*',
        '!'+$.path.devDir+'img/**/*.*',
        '!'+$.path.devDir+'js/**/*.*',
        '!'+$.path.devDir+'pug/**/*.*',
        '!'+$.path.devDir+'sass/**/*.*',
      ])
      .pipe($.gulp.dest($.path.distDir));
  });
   $.gulp.task('extras:build', () => {
    return $.gulp.src([
        $.path.devDir+'*.*',
        $.path.devDir+'*/**/*.*',
        '!'+$.path.devDir+'fonts/**/*.*',
        '!'+$.path.devDir+'img/**/*.*',
        '!'+$.path.devDir+'js/**/*.*',
        '!'+$.path.devDir+'pug/**/*.*',
        '!'+$.path.devDir+'sass/**/*.*',
      ])
      .pipe($.gulp.dest($.path.builtDir));
  });


};