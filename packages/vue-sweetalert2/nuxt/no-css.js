/* eslint-disable @typescript-eslint/no-var-requires */
const {
    resolve
} = require('path');

module.exports = function nuxtVueSweetalert2(moduleOptions) {
    // Register plugin
    this.addPlugin({
        src: resolve(__dirname, 'plugin.no-css.js'),
        fileName: 'vue-sweetalert2.js',
        options: moduleOptions,
        ssr: false
    });
}

module.exports.meta = require('../package.json');
