module.exports = function() {
  var fileName = 'main.js';
  var allScripts = [$.path.devDir+'js/**/*.js'];
    $.gulp.task('scripts', () => {
    return $.gulp.src(allScripts)
      .on('error', $.gp.notify.onError({ title: 'JS' }))
      .pipe($.gp.plumber())
      .pipe($.gp.sourcemaps.init({
        loadMaps: true
      }))
      .pipe($.gp.concat(fileName))
      .pipe($.gp.rename({ suffix: '.min' }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.path.distDir+'js/'))
      .pipe($.browserSync.reload({
          stream: true
      }));
    });

$.gulp.task('scripts:build', () => {
    return $.gulp.src(allScripts)
      .on('error', $.gp.notify.onError({ title: 'JS' }))
      .pipe($.gp.concat(fileName))
      .pipe($.gp.uglify())
      .pipe($.gp.rename({ suffix: '.min' }))
      .pipe($.gulp.dest($.path.builtDir+'js/'));
  });
};