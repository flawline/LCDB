'use strict';

var gulp        = require('gulp');
var compass     = require('gulp-compass');
//var livereload  = require('gulp-livereload');

var SCSS_FILE   = 'htdocs/scss/*.scss';


/*
 * Compass
 */
gulp.task('compass',function(){
    gulp.src([SCSS_FILE])
        .pipe(compass({
            config_file : 'htdocs/config.rb',
            comments : false,
            css : 'htdocs/css/',
            sass: 'htdocs/scss/'
        }));
//        .pipe(livereload());
});


/*
 * Watch
 */
gulp.task('watch',function(){
    gulp.watch(SCSS_FILE, function(event){
        gulp.run('compass');
    });
});

gulp.task('default', ['watch']);
