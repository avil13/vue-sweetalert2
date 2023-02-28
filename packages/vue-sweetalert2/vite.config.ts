/* eslint-disable import/no-extraneous-dependencies */

import { defineConfig } from 'vite';

//@ts-ignore
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
    minify: true,
    rollupOptions: {
      // external: /^lit-element/,
    },
  },
});
