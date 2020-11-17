const { src, dest, task, series } = require('gulp');
const rename = require('gulp-rename');
const through = require('through2');
const Vinyl = require('vinyl');

const handleFile = function () {
  return through.obj(function (file, encoding, callback) {
    const vinyl = new Vinyl(file);
    const newContent = '```ts\n' + vinyl.contents.toString() + '\n```';
    vinyl.contents = new Buffer(newContent);
    return callback(null, vinyl);
  });
};
task('mark', function () {
  return src('projects/ng-hertz-library/components/*/demo/*.ts')
    .pipe(handleFile())
    .pipe(
      rename(function (path) {
        path.dirname = path.dirname.replace('/demo', '');
        path.extname = '.md';
      })
    )
    .pipe(dest('projects/ng-hertz-doc/src/assets/markdown/components'));
});
task('default', series('mark'));
