module.exports = function() {
    $.gulp.task('clean:dist', function() {
        return $.del([
            $.path.distDir
        ]);
    });
    $.gulp.task('clean:build', function() {
        return $.del([
            $.path.builtDir
        ]);
    });
    $.gulp.task('clean', function() {
        return $.del([
            $.path.builtDir, $.path.distDir
        ]);
    });
};