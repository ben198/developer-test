const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const serverPath = 'src/server.js';

gulp.task('webpack', () => {
    return gulp.src('src/client.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist/'));
});

gulp.task('browser-sync', ['serve'], () => {
    browserSync.init({
        proxy: 'localhost:3000',
        port: 8080,
        notify: true
    });
});

gulp.task('reload', ['webpack'], () => {
    return browserSync.reload();
})

gulp.task('serve', ['webpack'], () => {
    nodemon({
        script: serverPath,
        watch: [serverPath]
    });
});

gulp.task('default', ['browser-sync'], () => {
    gulp.watch([
        'src/**/*.js',
        'src/**/*.scss'
    ], ['reload']);
});