var gulp        = require('gulp');
var concat      = require('gulp-concat');
var del 		= require('del');
var minify      = require('gulp-minify');
var minifyCss   = require('gulp-minify-css');
var merge       = require('merge-stream');
var runSequence = require('run-sequence');

gulp.task('default', function() {
	console.log('Running distribution sequence');

	return runSequence(
 		  'clean'
        , 'minify-css'
        , 'minify-js'
        , 'merge-css'
        , 'merge-js'
    );
});

gulp.task('clean', function () {
    return del.sync([
        'frontend/public/**/*'
    ]);
});

gulp.task('merge-css', function() {
	console.log('Merging css');


});

gulp.task('merge-js', function() {
	console.log('Merging js');

	
});

gulp.task('minify-css', function() {
	console.log('Minifying css');

	
});

gulp.task('minify-js', function() {
	console.log('Minifying js');

	
});