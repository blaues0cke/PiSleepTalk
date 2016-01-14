var gulp        = require('gulp');
var concat      = require('gulp-concat');
var del 		= require('del');
var flatten     = require('gulp-flatten');
var minify      = require('gulp-minify');
var minifyCss   = require('gulp-minify-css');
var merge       = require('merge-stream');
var rename      = require('gulp-rename');
var runSequence = require('run-sequence');

gulp.task('default', function() {
	console.log('Running distribution sequence');

	return runSequence(
 		  'clean'
        , 'copy-css'
        , 'copy-fonts'
        , 'copy-js'
        , 'minify-css'
        , 'minify-js'
        , 'merge-css'
        , 'merge-js'
        , 'delete-obsolete-stuff'
    );
});

gulp.task('clean', function () {
    return del.sync([
        'frontend/public/**/*'
    ]);
});

gulp.task('copy-css', function() {
	console.log('Copying css');

    return gulp.src('frontend/public_src/css/*.min.css')
        .pipe(gulp.dest('frontend/public/css/'))
    ;
});

gulp.task('copy-fonts', function() {
	console.log('Copying fonts');

    return gulp.src('frontend/public_src/fonts/*')
        .pipe(gulp.dest('frontend/public/fonts/'))
    ;
});

gulp.task('copy-js', function() {
	console.log('Copying js');

    return gulp.src('frontend/public_src/js/*.min.js')
        .pipe(gulp.dest('frontend/public/js/'))
    ;
});

gulp.task('merge-css', function() {
	console.log('Merging css');

    return gulp.src([
    		  'frontend/public/css/bootstrap.min.css'
    		, 'frontend/public/css/tether.min.css'
    		, 'frontend/public/css/font-awesome.min.css'
    		, 'frontend/public/css/sleeptalk.min.css'
    	])
        .pipe(concat('css.min.css'))
        .pipe(gulp.dest('frontend/public'))
    ;
});

gulp.task('merge-js', function() {
	console.log('Merging js');

    return gulp.src([
    		  'frontend/public/js/jquery-2.1.4.min.js'
    		, 'frontend/public/js/tether.min.js'
    		, 'frontend/public/js/bootstrap.min.js'
    		, 'frontend/public/js/wavesurfer.min.js'
    		, 'frontend/public/js/wavesurfer.regions-min.js'
    		, 'frontend/public/js/sleeptalk-min.js'
    	])
        .pipe(concat('js.min.js'))
        .pipe(gulp.dest('frontend/public'))
    ;
});

gulp.task('minify-css', function() {
	console.log('Minifying css');

    return gulp.src('frontend/public_src/css/sleeptalk.css')
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('frontend/public/css/'))
    ;
});

gulp.task('minify-js', function() {
	console.log('Minifying js');

	return gulp.src([
			  'frontend/public_src/js/sleeptalk.js'
			, 'frontend/public_src/js/wavesurfer.regions.js'
		])
        .pipe(minify())
        .pipe(gulp.dest('frontend/public/js/'))
    ;
});

gulp.task('delete-obsolete-stuff', function() {
	console.log('Deleting obsolete stuff');

	del.sync([
        'frontend/public/css'
        , 'frontend/public/js'
    ]);
});