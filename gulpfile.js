var gulp = require('gulp');
var less = require('gulp-less');  
var concat = require('gulp-concat');
var changed = require('gulp-changed');  
var path = require('path');
var concat = require('gulp-concat');

gulp.task('css', function () {
	return gulp.src('bower_components/bootstrap/less/bootstrap.less')
		.pipe(changed('public/css'))
		.pipe(less({
			paths: [ path.join(__dirname, 'less', 'includes') ]
		}))
		.pipe(gulp.dest('public/css'))
		.on('error', console.log);
});

gulp.task('bootstrap', function() {  
  return gulp.src('bower_components/bootstrap/js/*.js')
	.pipe(concat('bootstrap.js'))
	.pipe(gulp.dest('public/javascripts'))
});

gulp.task('jquery', function() {  
  return gulp.src('bower_components/jquery/src/*.js')
	.pipe(concat('jquery.js'))
	.pipe(gulp.dest('public/javascripts'))
});

gulp.task('default', function() {
	console.log("Gulp working");
});