var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var prettify	= require('gulp-prettify');
var uglifycss	= require('gulp-uglifycss');

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'prettify'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("*.html", ['prettify']).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./scss/*.scss")
        .pipe(sass())
        .pipe(uglifycss({"max-line-len": 80}))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

// beautify html
gulp.task('prettify', function() {
	return gulp.src('./*.html')
		.pipe(prettify({indent_size: 2}))
		.pipe(gulp.dest('.'))
});

gulp.task('default', ['serve', 'prettify']);
