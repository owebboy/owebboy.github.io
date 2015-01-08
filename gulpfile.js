var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');

gulp.task('default', function() {
	gulp.src('./css/*.css')
		.pipe(concat('o.css'))
		.pipe(minify())
		.pipe(gulp.dest('./'));
});