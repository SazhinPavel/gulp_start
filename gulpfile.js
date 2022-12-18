const gulp = require('gulp');
const requireDir = require("require-dir");
const tasks = requireDir("./tasks");

exports.style = tasks.style;
exports.watch = tasks.watch;
exports.hashStyle = tasks.hash_style;
exports.bs_html = tasks.bs_html;
exports.html = tasks.html;

exports.default = gulp.parallel(
	exports.style,
	exports.html,
	exports.bs_html,
	exports.watch
)

// function test2(done) {
//   console.log("test 2");
//   done();
// }
//Определяем функцию по умолчанию для Gulp
// gulp.task("css", test);
// gulp.task(test2);
