import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
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
  build: {
    rollupOptions: {
      // 配置多页面
      input: {
        index: './index.html',
        area: './area.html',
        wordstream: './wordstream.html',
      },
    },
  },
  rollupOptions: {
    // 确保外部化处理那些你不想打包进库的依赖,解决插件报错问题(reading 'isCE')
    external: ['vue','safe-buffer'],
    output: {
      // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      globals: {
        vue: 'Vue',

      }
    }
  }
})
