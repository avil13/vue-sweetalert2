/* eslint-disable import/no-extraneous-dependencies */

import { defineConfig } from 'vite';

const isDev = process.env.IS_DEV === 'dev';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['umd', 'es', 'cjs'],
      name: 'vueSweetalert',
      fileName: 'vue-sweetalert',
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        ecma: 2015,
      },
      format: {
        comments: false,
        beautify: isDev,
      },
    },
    rollupOptions: {
      // external: /^lit-element/,
    },
  },
});
