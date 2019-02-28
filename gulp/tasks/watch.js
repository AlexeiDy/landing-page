module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch($.path.devDir + 'pug/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch($.path.devDir + 'sass/**/*.{sass||scss}', $.gulp.series('sass'));
    $.gulp.watch($.path.devDir + 'img/svg/*.svg', $.gulp.series('svg'));
    $.gulp.watch($.path.devDir + 'js/**/*.js', $.gulp.series('webpack'));
    $.gulp.watch($.path.devDir + 'img/**/*.{png,jpg,gif}', $.gulp.series('images:copy'));
    $.gulp.watch($.path.devDir + 'fonts/**/*.*', $.gulp.series('fonts:copy'));
  });
};