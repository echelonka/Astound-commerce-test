'use strict';

const gulp = require('gulp'),
	sass = require('gulp-sass'),
	csso = require('gulp-csso'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
	return gulp.src('sass/*.scss')
		.pipe(sass().on('error', function (error) {
			console.log(error.formatted);
			this.emit('end');
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(csso())
		.pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function () {
	gulp.watch('sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);