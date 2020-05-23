const gulp = require("gulp");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");

exports.build = function build() {
  return gulp
    .src("server/styles/styles.pcss")
    .pipe(
      postcss([
        require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer"),
      ])
    )
    .pipe(rename({ extname: ".css" }))
    .pipe(gulp.dest("server/static/css"));
};

exports.watch = function watch() {
  return gulp.watch(
    ["tailwind.config.js", "server/**/*.pcss"],
    { ignoreInitial: false },
    exports.build
  );
};
