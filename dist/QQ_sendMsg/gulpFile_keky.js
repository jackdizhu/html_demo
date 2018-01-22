var gulp = require('gulp'); //基础库
// var clean = require('gulp-clean'); //清空文件夹
var replace = require('gulp-replace');

  var basePath = './';
  gulp.task('cp', function () {
      return gulp.src([basePath+'dist/**'])
          .pipe(gulp.dest(basePath+'svn/dist'));
  });

  gulp.task('replace', ['cp'], function(){
    gulp.src([basePath + 'jackdizhu.js'])
      .pipe(replace(/([0-9]+)/g, "$11"))
      .pipe(gulp.dest(basePath + ''));
  });

  gulp.task('default',['cp', 'replace']);
  gulp.run('default');
