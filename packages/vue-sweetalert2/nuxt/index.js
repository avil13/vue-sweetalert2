// eslint-disable-next-line @typescript-eslint/no-var-requires
const {resolve} = require('path');

module.exports = function nuxtVueSweetalert2(moduleOptions) {
  const options = Object.assign({}, this.options.sweetalert, moduleOptions);

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'vue-sweetalert2.js',
    options,
    ssr: false,
  });
};

module.exports.meta = require('../package.json');
