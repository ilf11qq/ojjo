const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css')

function style () {
    return gulp.src('style.scss').
    pipe(sass()).pipe(cleanCSS()).
    pipe(gulp.dest('./'));
}


exports.style = style;
