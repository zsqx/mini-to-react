const $ = require('gogocode')
const { of } = require('rxjs')
const { src, dest } = require('gulp')
const through2 = require('through2');

function myCustomPlugin(options) {
  return through2.obj(function (file, encoding, cb) {
    if (file.isNull()) {
      return cb(null, file);
    }
    if (file.isStream()) {
      return cb(new Error('Streams not supported'));
    }
    const buffer = Buffer.concat([
      Buffer.from('/* My Custom Header */\n', 'utf8'),
      file.contents,
      Buffer.from('/* My Custom Footer */\n', 'utf8'),
    ]);
    const ast = $(file.contents.toString())
    console.log(ast.find('BaseComponent()').generate());
    file.contents = buffer;

    cb(null, file);
  });
}

module.exports = function typescript() {

  return src('/Users/shnegqizhao/yupao/yp-synergy/packages/yp-mini-saas/src/**/*.ts')
    .pipe(
      myCustomPlugin({})
    )
    .pipe(
      dest('dist/')
    )
}
