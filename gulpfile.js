// REQUIRE PACKAGE
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    handlebars = require('gulp-compile-handlebars'),
    rename = require('gulp-rename'),
    gulpPath = require('gulp-path'),
    sourcemaps = require("gulp-sourcemaps"),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    mainBowerFiles = require('gulp-main-bower-files');

// BOWER
gulp.task('main-bower-files', function() {
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles())
        .pipe(gulp.dest('./src/vendors'));
});

// SASS
gulp.task('sass', function() {
    return gulp.src('./src/assets/stylesheets/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/assets/stylesheets'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./src/assets/stylesheets/**/*.scss', ['sass']);
});

// HANDLEBARS
gulp.task('hbs', function() {
    var options = {
        ignorePartials: true,
        batch: ['./src/view/partials']
    };
    return gulp.src('src/view/pages/**/*.hbs')
        .pipe(handlebars("", options))
        .pipe(rename(function(path) {
            path.extname = ".html";
        }))
        .pipe(gulp.dest('src'))
        .pipe(gulp.dest('public'))
        .pipe(connect.reload());
});
gulp.task('hbs:watch', ['hbs'], function() {
    gulp.watch('src/view/**/*.hbs', ['hbs']);
});

// DESTINATION PUBLIC
gulp.task('img', function() {
    return gulp.src('src/assets/images/**/*')
        .pipe(gulp.dest('public/assets/images'));
});

gulp.task('js', function() {
    return gulp.src('src/js/**/*')
        .pipe(gulp.dest('public/js'));
});

gulp.task('vendors', function() {
    return gulp.src('src/vendors/**/*')
        .pipe(gulp.dest('public/vendors'));
});

// CONNECTION SERVER
gulp.task('connect', function() {
    connect.server({
        name: 'localhost',
        root: ['src'],
        port: 2017,
        livereload: true
    });
});

// TASKS TO RUN
gulp.task('default', ['hbs:watch', 'sass', 'sass:watch', 'img', 'js', 'vendors', 'main-bower-files', 'connect']);
