module.exports = function() {
  $.gulp.task('svg', () => {
    return $.gulp.src($.path.devDir + 'img/svg/*.svg')
      .pipe($.gp.svgmin({
          js2svg: {
              pretty: true
          }
      }))
      .pipe($.gp.cheerio({
          run: function($) {
              $('[fill]').removeAttr('fill');
              $('[stroke]').removeAttr('stroke');
              $('[style]').removeAttr('style');
          },
          parserOptions: { xmlMode: true }
      }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.gp.svgSprite({
          mode: {
              symbol: {
                  sprite: "sprite.svg"
              }
          }
      }))
      .pipe($.gulp.dest($.path.devDir + 'img/svg/'));
  });

  $.gulp.task('svg:copy', () => {
    return $.gulp.src($.path.devDir + 'img/svg/symbol/*.svg')
      .pipe($.gulp.dest($.path.distDir + 'img/'));
  });

  $.gulp.task('svg:copy:build', () => {
    return $.gulp.src($.path.devDir + 'img/svg/symbol/*.svg')
      .pipe($.gulp.dest($.path.builtDir + 'img/'));
  });

};
