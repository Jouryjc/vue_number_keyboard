var config = require('./webpack.config.js')

config.entry = {
  'vue-number-keyboard': './src/index.js',
}

config.output = {

  filename: './dist/[name].js',
  library: 'NumberKeyboard',
  libraryTarget: 'umd'
}


module.exports = config
