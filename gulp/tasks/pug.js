module.exports = function() {
  $.gulp.task('pug', function buildHTML(){
    return $.gulp.src($.path.devDir+'pug/pages/*.pug')
      .pipe($.gp.plumber())
      .pipe($.gp.pug({
        pretty: true
      }))
      .on('error', $.gp.notify.onError(function(error) {
          return {
              title: 'Pug',
              message: error.message
          };
      }))
      .pipe($.gulp.dest($.path.distDir))
      .pipe($.browserSync.reload({
          stream: true
      }));
  });

  $.gulp.task('pug:build', function(){
    return $.gulp.src($.path.devDir+'pug/pages/*.pug')
      .pipe($.gp.plumber())
      .pipe($.gp.pug({
        pretty: true
      }))
      .on('error', $.gp.notify.onError(function(error) {
          return {
              title: 'Pug',
              message: error.message
          };
      }))
      .pipe($.gp.htmlmin({
          collapseWhitespace: true
        }))
      .pipe($.gulp.dest($.path.builtDir));
  });
};
