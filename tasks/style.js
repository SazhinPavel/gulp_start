const { src, dest } = require("gulp");
const concat = require("gulp-concat");
const prefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean-css");
const bs = require('browser-sync');

module.exports = function style(done) {
  return src([
    "src/css/grid.css",
    "src/css/fonts.css",
    "src/css/style.css",
    "src/css/media.css",
  ])
    .pipe(
      prefixer({
        overrideBrowserslist: ["last 8 versions"],
        browsers: [
          "Android >= 4",
          "Chrome >= 20",
          "Firefox >= 24",
          "Explorer >= 11",
          "iOS >= 6",
          "Opera >= 12",
          "Safari >= 6",
        ],
      })
    )
    .pipe(
      clean({
        level: 2,
      })
    )
    .pipe(concat("all.min.css"))
    .pipe(dest("./build/css/"))
    .pipe(bs.stream());
};
