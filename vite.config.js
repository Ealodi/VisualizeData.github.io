import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: './',
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
        target: 'https://so.news.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'ts-super-web',
    rollupOptions: {
      input: {
        index: './index.html'
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
