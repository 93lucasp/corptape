// PACKAGES
var gulp            =  require('gulp'),
    connect         = require('gulp-connect'),
    handlebars      = require('gulp-compile-handlebars'),
    rename          = require('gulp-rename'),
    gulpPath        = require('gulp-path'),
    sourcemaps      = require("gulp-sourcemaps"),
    concat          = require('gulp-concat'),
    sass            = require('gulp-sass'),
    mainBowerFiles  = require('gulp-main-bower-files'),
    uglify          = require("gulp-uglify"),
    cleanCSS        = require('gulp-clean-css');


// BOWER MAIN FILES
gulp.task('main-bower-files', function() {
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles())
        .pipe(gulp.dest('./src/vendors'));
});


// SASS
gulp.task('sass', function() {
    gulp.src('./src/assets/stylesheets/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/assets/stylesheets'))
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
        .pipe(gulp.dest('public/js'))
        .pipe(connect.reload());
});

gulp.task('vendors', function() {
    return gulp.src('src/vendors/**/*')
        .pipe(gulp.dest('public/vendors'))
        .pipe(connect.reload());
});

gulp.task('php', function() {
    return gulp.src('src/*.php')
        .pipe(gulp.dest('public/'));
});

// MINIFY JS
gulp.task('minify-js', function() {
    gulp.src('src/js/app.js') // path to your files
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.extname = ".min.js";
        }))
        .pipe(gulp.dest('src/js'))
        .pipe(gulp.dest('public/js'));   
});

// MINIFY CSS
gulp.task('minify-css', function() {
    gulp.src('./src/assets/stylesheets/main.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename(function(path) {
            path.extname = ".min.css";
        }))
        .pipe(gulp.dest('./src/assets/stylesheets'))
        .pipe(gulp.dest('./public/assets/stylesheets'));
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
gulp.task('default', ['sass', 'sass:watch', 'hbs', 'hbs:watch', 'img', 'js', 'php', 'minify-js', 'minify-css', 'vendors', 'main-bower-files', 'connect']);
