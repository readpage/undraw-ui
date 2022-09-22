import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // 处理vue文件
import DefineOptions from 'unplugin-vue-define-options/vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts' //生成类库的声明文件.d.ts

const input = resolve('packages') // 入口文件
const output = resolve('dist') // 输出文件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    DefineOptions(),
    dts({
      include: ['packages/**/*'],
      exclude: ['node_modules/**', 'demo/**']
    })
  ],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: resolve('packages')
      }
    ]
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  // 打包
  build: {
    // 打包输出目录
    outDir: output,
    minify: true, //是否进行压缩
    lib: {
      entry: resolve(input, 'index.ts'),
      name: 'UndrawUi',
      fileName: () => 'index.js',
      formats: ['es']
    },
    rollupOptions: {
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      },
      // 打包过滤掉第三方库
      external: ['vue', 'element-plus']
    }
  }
})
