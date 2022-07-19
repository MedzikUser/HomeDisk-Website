/// <reference types="@sveltejs/kit" />
import { sveltekit } from '@sveltejs/kit/vite'

const config: import('vite').UserConfig = {
  plugins: [sveltekit()],
  server: {
    proxy: {
      '/api/': {
        target: 'http://127.0.0.1:8080/api/',
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
}

export default config
