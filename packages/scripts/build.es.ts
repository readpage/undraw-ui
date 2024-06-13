import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // 处理vue文件
import { resolve } from 'path'
import dts from 'vite-plugin-dts' //生成类库的声明文件.d.ts
import pkg from '../package.json'

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
  // 打包
  build: {
    // 打包输出目录
    outDir: 'es',
    cssCodeSplit: true,
    emptyOutDir: true,
    lib: {
      entry: resolve(process.cwd(), './src/index.ts'),
      // 输出格式
      formats: ['es']
    },
    rollupOptions: {
      output: {
        banner: `/*! UndrawUi v${pkg.version} */`,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus'
        },
        manualChunks(id) {
          if (id.includes('node_modules/.pnpm')) {
            if (id.includes('dayjs')) {
              return id.split('node_modules/.pnpm')[1].split('/')[3]
            }
          }
          let arr = ['components', 'hooks', 'element', 'language']
          for (let i = 0; i < arr.length; i++) {
            if (id.includes(`/packages/src/${arr[i]}`)) {
              let match = id.match(`${arr[i]}/[^/]+`)
              if (match && !match[0].includes('.')) {
                return match[0]
              }
            }
          }

          if (id.includes('/src/util')) {
            let match = id.match(`util/[^.]+`)
            return match && match[0]
          }
        },
        chunkFileNames: ({ name }) => {
          if (name.includes('util')) {
            return '[name].js'
          }
          return name === 'index' ? 'index.js' : '[name]/index.js'
        },
        entryFileNames: ({ name }) => {
          return name === 'index' ? 'index.js' : '[name].js'
        },
        assetFileNames: ({ name }) => {
          return name?.includes('index') ? 'index.css' : 'components/[name]/[name].css'
        }
      },
      // 打包过滤掉第三方库
      external: ['vue', 'element-plus', 'undraw-ui']
    }
  }
})
