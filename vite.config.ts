import * as path from 'path'

import vituum from 'vituum'
import twig from '@vituum/vite-plugin-twig'

import { entryFileNames, chunkFileNames, assetFileNames } from './vite/assets'

export default {
  plugins: [
    vituum(),
    twig({
      root: './src',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
    },
  },
  build: {
    modulePreload: false,
    minify: false,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
        entryFileNames,
        chunkFileNames,
        assetFileNames,
      }
    }
  },
}
