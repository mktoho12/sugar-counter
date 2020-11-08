'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import pug from 'gulp-pug';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';

const dirs = {
  src: 'src',
  dest: 'build'
};

const paths = {
  src: {
    scss: `${dirs.src}/**/*.scss`,
    es6: `${dirs.src}/**/*.es6`,
    pug: `${dirs.src}/**/*.pug`
  },
  dest: dirs.dest
};

gulp.task('pug', done => {
  gulp.src(paths.src.pug)
    .pipe(pug({
      locals: {},
      pretty: true
    }))
    .pipe(gulp.dest(paths.dest));

    done();
});

gulp.task('sass', done => {
  gulp.src(paths.src.scss)
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dest));
    
    done();
});

gulp.task('es6', () => {
  return gulp.src(paths.src.es6)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dest));
});

gulp.task("watch", function () {
  gulp.watch(paths.src.scss, gulp.task('sass'));
  gulp.watch(paths.src.es6, gulp.task('es6'));
  gulp.watch(paths.src.pug, gulp.task('pug'));
});
