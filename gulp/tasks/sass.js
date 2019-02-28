module.exports = function () {
  const processors = [
      $.autoprefixer({
        browsers: ['last 3 versions','ie 10']}),
      $.cssMqpacker({
        sort: true
      })
    ];

  $.gulp.task('sass', () => {

    return $.gulp.src($.path.devDir+'sass/styles.sass')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.plumber())
      .pipe($.gp.sass({}))
      .on('error', $.gp.notify.onError(function (error) {
          return {
              title: 'Sass',
              message: error.message
          };
      }))
      .pipe($.gp.postcss(processors))
      .pipe($.gp.rename({
        suffix: '.min'
      }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.path.distDir+'css/'))
      .pipe($.browserSync.reload({
          stream: true
      }));
  });

  $.gulp.task('css:build', () => {
    return $.gulp.src($.path.devDir+'sass/styles.sass')
      .pipe($.gp.sass({}))
      .on('error', $.gp.notify.onError(function (error) {
          return {
              title: 'Sass',
              message: error.message
          };
      }))
      .pipe($.gp.postcss(processors))
      .pipe($.gp.rename({
        suffix: '.min'
      }))
      .pipe($.gp.csso())
      .pipe($.gulp.dest($.path.builtDir+'css/'))
  });
};
