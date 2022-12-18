const { src, dest } = require("gulp");
const hash = require("gulp-hash-filename");

module.exports = function hashStyle() {
  return src("build/css/all.min.css")
    .pipe(
      hash({
        format: "{name}.{hash}.{size}{ext}",
      })
    )
    .pipe(dest("build/css/"));
};
