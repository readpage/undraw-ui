import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
//
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve('demo')
      },
      {
        find: '~',
        replacement: resolve('packages/src')
      }
    ]
  },
  server: {
    host: '0.0.0.0',
    port: 3001
  },
  // 打包
  build: {
    // 打包输出目录
    outDir: 'demo',
    minify: true //是否进行压缩
  }
})
