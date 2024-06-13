import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // 处理vue文件
import { resolve } from 'path'
import pkg from '../package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
    outDir: resolve('dist'),
    emptyOutDir: true,
    lib: {
      entry: resolve('./src/index.ts'), // 入口文件
      name: 'UndrawUi', // umd的变量名
      fileName: format => `index.${format}.js`,
      // 输出格式
      formats: ['umd']
    },
    rollupOptions: {
      output: {
        exports: 'named',
        banner: `/*! UndrawUi v${pkg.version} */`,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus'
        }
      },
      // 打包过滤掉第三方库
      external: ['vue', 'element-plus']
    }
  }
})
