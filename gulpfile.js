const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('serve', () => {
    nodemon({
        script: 'src/server.js'
    })
});

gulp.task('default', ['serve']);