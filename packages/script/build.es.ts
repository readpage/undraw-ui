import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // 处理vue文件
import { resolve } from 'path'
import dts from 'vite-plugin-dts' //生成类库的声明文件.d.ts
import pkg from './package.json'

const input = resolve('src') // 入口文件
const output = resolve('es') // 输出文件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['src/**/*'],
      exclude: ['node_modules/**']
    })
  ],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: resolve('src')
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
    cssCodeSplit: true,
    emptyOutDir: true,
    lib: {
      entry: resolve(input, 'index.ts'),
      name: 'UndrawUi', // umd的变量名
      fileName: format => `index.${format}.js`,
      // 输出格式
      formats: ['es']
    },
    rollupOptions: {
      output: {
        exports: 'named',
        banner: `/*! UndrawUi v${pkg.version} */`,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus'
        },
        manualChunks(id) {
          if (id.includes('node_modules/.pnpm')) {
            return id.split('node_modules/.pnpm')[1].split('/')[3]
          }
          // if (id.includes('packages/src/components/fold')) {
          //   console.log(id)
          //   return 'fold'
          // }
          let arr = ['components', 'element', 'hooks']
          for (let i = 0; i < arr.length; i++) {
            if (id.includes('packages/src/' + arr[i])) {
              let match = id.match(`${arr[i]}/[^/]+`)
              if (!match[0].includes('.ts')) {
                return match[0]
              }
            }
          }
          if (id.includes('packages/src/styles')) {
            return 'index'
          }
          // if (id.includes('packages/src/util')) {
          //   let name = id.substring(id.lastIndexOf('/') + 1)
          //   return 'util/' + name
          // }
        },
        // 用于指定入口文件的文件名格式
        entryFileNames: ({ name }) => {
          return name === 'index' ? 'index.js' : '[name]/index.js'
        },
        // 用于命名代码拆分时创建的文件名格式
        chunkFileNames: ({ name }) => {
          return name === 'index' ? 'index.js' : '[name]/index.js'
        },
        // 用于输出静态资源的命名，[ext]表示文件扩展名
        assetFileNames: ({ name }) => {
          return name === 'index.css' ? 'index.css' : 'components/[name]/index.css'
        }
      },
      // 打包过滤掉第三方库
      external: ['vue', 'element-plus']
    }
  }
})
