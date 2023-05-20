const { src, task } = require('gulp')
const { series } = require('gulp');
const typescript = require('./src/task/typescript')
const wxml = require('./src/task/wxml')


exports.default = series(typescript, wxml)

