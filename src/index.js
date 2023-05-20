const gogocode = require('gogocode')
const webpack = require('webpack')
const getConfig = require('./config/webpack.config')
// console.log(gogocode());

// 工作目录
const entry = process.argv.pop()
webpack(getConfig(entry))
// console.log(process.argv.pop());