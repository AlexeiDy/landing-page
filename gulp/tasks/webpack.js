module.exports = function (){
  $.gulp.task('webpack', function (){
    return $.gulp.src($.path.devDir + 'js/**/*.js')
      .on('error', $.gp.notify.onError({ title: 'JS' }))
      .pipe($.gp.plumber())
      .pipe($.webpack({
        entry: {
          main: $.path.devDir + 'js/main.js'
        },
        output: {
          filename: '[name].min.js'
        },
        devtool: 'source-map',
        module: {
          rules: [
            {
              test:/\.js$/,
              exclude: /node_modules/,
              use: 'babel-loader'
            }
          ]
        }
      }))
      .pipe($.gulp.dest($.path.distDir+'js/'))
      .pipe($.browserSync.reload({
        stream: true
      }));
    });

  $.gulp.task('webpack:build', function(){
    return $.gulp.src($.path.devDir + 'js/**/*.js')
      .on('error', $.gp.notify.onError({ title: 'JS' }))
      .pipe($.webpack({
        entry: {
          main: $.path.devDir + 'js/main.js'
        },
        output: {
          filename: '[name].min.js'
        },
        module: {
          rules: [
            {
              test:/\.js$/,
              exclude: /node_modules/,
              use: 'babel-loader'
            }
          ]
        }
      }))
      .pipe($.gp.uglify())
      .pipe($.gulp.dest($.path.builtDir+'js/'))
  });
}; 