module.exports = function() {
    $.gulp.task('serve', function() {
        $.browserSync.init({
            server: $.path.distDir,
            port: 9000,
            notify: false
        });
    });
};