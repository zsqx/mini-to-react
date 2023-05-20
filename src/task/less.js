const concat = require('gulp-concat')

module.exports = function merge() {
  return src('/Users/shnegqizhao/yupao/yp-synergy/packages/yp-mini-saas/src/**/*.ts')
    .pipe(
      myCustomPlugin({})
    )
    .pipe(
      dest('dist/')
    )
}