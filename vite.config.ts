import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { UndrawUiResolver } from 'undraw-ui/es/resolvers'

// https://vitejs.dev/config/
//
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver(), UndrawUiResolver]
    })
  ],
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
