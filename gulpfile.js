var gulp = require('gulp');
var sass = require('gulp-sass');
var sassLint = require('gulp-sass-lint')
var pug = require('gulp-pug');

/* Sass to css compiler */
gulp.task('sass', function(){
  return gulp.src('src/sass/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('bundle'))
});

/* pug to html compiler */
gulp.task('pug', function(){
  return gulp.src('src/pug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('bundle'))
});

/* Watch task */
gulp.task('watch', function(){
  gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('src/pug/*', gulp.series('pug'));
})

/* default task */
gulp.task('default', gulp.series('sass', 'pug', 'watch'));
