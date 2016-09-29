const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

gulp.task('webpack', () => {
    return gulp.src('src/client.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist/'));
});

gulp.task('serve', () => {
    nodemon({
        script: 'src/server.js'
    });
});

gulp.task('default', ['webpack', 'serve']);