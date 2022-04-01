import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import gulpif from 'gulp-if';
import plumber from 'gulp-plumber';
import config from '../config';

export const html = () => {
   return gulp.src(config.src.html)

      .pipe(plumber())
      .pipe(gulpif(config.isMinHtml, htmlmin({
         collapseWhitespace: true,
         removeComments: true,
      })))

   .pipe(gulp.dest(config.build.html))
}