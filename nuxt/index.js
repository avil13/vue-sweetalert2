const { resolve } = require('path')

module.exports = function nuxtVueSweetalert2 (moduleOptions) {
  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'vue-sweetalert2.js',
    moduleOptions
  })
}

module.exports.meta = require('../package.json')