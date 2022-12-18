const { watch, parallel, series } = require("gulp");

module.exports = function watching() {
  watch("src/**/*.css", series("style"));
  watch("src/**/*.html", series("html"));
};
