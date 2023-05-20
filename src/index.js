const webpack = require('webpack')
const spawn = require('cross-spawn')
// console.log(gogocode());
// 工作目录
const entry = process.argv.pop()
// console.log(process.argv.pop());
spawn("gulp", [], {
  stdio: 'inherit'
})