var gulp = require('gulp');
var pug = require('gulp-pug');
var path = require('path');
var less = require('gulp-less');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();


function compile_less()
{
    gulp.src('*.less')
    .pipe(less())
    .pipe(gulp.dest('./build/'));
}

function buildHTML() {
    console.log('pug');
    gulp.src('*.pug')
  .pipe(pug({
    // Your options in here.
  }))
   .pipe(gulp.dest('build'));
}

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
    gulp.watch('./build').on('change', browserSync.reload);
    gulp.watch("*.less").on('change', compile_less );
    gulp.watch("./bem/*.pug").on('change', buildHTML );
    gulp.watch("*.pug").on('change', buildHTML );
    console.log('ok');
});

