import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  define: {
    'process.env': {},
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://news.cctv.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        area: './area.html',
        wordstream: './wordstream.html',
      },
      external: ['vue', 'safe-buffer'],
      output: {
        globals: {
          vue: 'Vue',
        }
      }
    },
  },
});
