const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const { parallel } = require('gulp');

const style  = (path, done) => {
    return gulp.src(`${path}/style.scss`).
    pipe(sass()).pipe(cleanCSS()).
    pipe(gulp.dest(`./${path}`));
}

const mainPage = () => style('main-page');
const product = () => style('product');
const contacts = () => style('contacts');
const catalog = () => style('catalog');


exports.build = parallel(mainPage, product, contacts, catalog);
