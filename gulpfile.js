var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
 //и что-то выведем в консоль для подтверждения
 gulp.task('sass', function(){
   gulp.src('./sass/**/*.scss')
     .pipe(sass())
     .pipe(gulp.dest('./cssassets'));
 });

/*То что ниже то в тесте*/

gulp.task('default', function () {
 return gulp.src('./cssassets/**/*.css')
   .pipe(concatCss("styles.css"))
   .pipe(gulp.dest('css/'));
});
