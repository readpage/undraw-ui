import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { createPlugin, vueDocFiles } from 'vite-plugin-vuedoc'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    DefineOptions(),
    // 1. Must be loaded before @vitejs/plugin-vue
    createPlugin({
      highlight: {
        theme: 'one-dark'
      }
    }),
    vue({
      include: [...vueDocFiles] // 2. Must include .md | .vd files
    })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve('src')
      },
      {
        find: '~',
        replacement: resolve('packages') 
      },
    ]
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  // 打包
  build: {
    // 打包输出目录
    outDir: 'examples',
    minify: true //是否进行压缩
  }
})
