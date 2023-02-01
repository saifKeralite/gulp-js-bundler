var gulp = require("gulp");
var rollup = require("gulp-rollup");
gulp.task("watch", () => {
  gulp
    .src("./js/**/*.js")
    // transform the files here.
    .pipe(
      rollup({
        // any option supported by Rollup can be set here.
        input: "./js/main.js",
        output: {
          format: "iife",
        },
      })
    )
    .pipe(gulp.dest("./dist/output"));
});
