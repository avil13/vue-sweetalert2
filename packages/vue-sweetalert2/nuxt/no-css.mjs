/* eslint-disable @typescript-eslint/no-var-requires */
import { resolve } from 'path';

export default function nuxtVueSweetalert2(moduleOptions) {
  const options = Object.assign({}, this.options.sweetalert, moduleOptions);

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'plugin.no-css.js'),
    fileName: 'vue-sweetalert2.js',
    options,
    ssr: false,
  });
};

export const meta = require('../package.json');
