const { src, dest, task, series, watch } = require('gulp');
const rename = require('gulp-rename');
const through = require('through2');
const Vinyl = require('vinyl');
const chalk = require('chalk');
const debug = require('gulp-debug');
const changed = require('gulp-changed');
const demoPath = 'ng-hertz-doc/src/app/components/*/demo/*.ts';
const markPath = 'ng-hertz-doc/src/assets/markdown/components';

const handleFile = function () {
  return through.obj(function (file, encoding, callback) {
    const vinyl = new Vinyl(file);
    const newContent = '```angular\n' + vinyl.contents.toString() + '\n```';
    vinyl.contents = new Buffer.from(newContent);
    return callback(null, vinyl);
  });
};
task('mark', function () {
  return src(demoPath)
    .pipe(
      rename(function (path) {
        path.dirname = path.dirname.replace('/demo', '');
        path.extname = '.md';
      })
    )
    .pipe(changed(markPath))
    .pipe(handleFile())
    .pipe(
      debug({
        title: '🚚 mark:',
        showCount: false,
        logger: message => {
          console.log(chalk.cyan(message));
        }
      })
    )
    .pipe(dest(markPath));
});
task('watch', function () {
  watch(demoPath, series('mark'));
});
task('start', series('mark', 'watch'));
