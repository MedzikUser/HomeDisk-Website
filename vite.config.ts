import { sveltekit } from '@sveltejs/kit/vite'
import * as path from 'path'
import { imagetools } from 'vite-imagetools'

const config: import('vite').UserConfig = {
  plugins: [imagetools(), sveltekit()],

  resolve: {
    alias: {
      $img: path.resolve('src/images')
    }
  },

  server: {
    fs: {
      strict: false
    }
  }
}

export default config
