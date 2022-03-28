const gulp = require("gulp");
const ts = require("gulp-typescript");
const merge = require("merge2");
const uglify = require('gulp-uglify');

const tsProject = ts.createProject("tsconfig.json");
gulp.task("default", function () {
  const tsResult = tsProject.src().pipe(tsProject());
  const output = gulp.dest('dist/');
  return merge([
    tsResult.js.pipe(uglify()).pipe(output),
    tsResult.dts.pipe(output), 
  ]);
});