import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'; // 指定解析路径

const pathResolve = (dir: string) => resolve(__dirname, dir)


// https://vitejs.dev/config/
export default defineConfig({
            plugins: [vue()],
    base: './',
    resolve: {
        alias: {
            '@': pathResolve('./src'),
            views: pathResolve('./src/views'), // 设置 `views` 指向 `./src/views` 目录，下同
            components: pathResolve('./src/components'),
            assets: pathResolve('./src/assets'),
        }
    },
    build: {
        outDir: 'dist',
        terserOptions: {
            compress: {
                keep_infinity: true,  // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
                drop_console: true,   // 生产环境去除 console
                drop_debugger: true   // 生产环境去除 debugger
            }
        },
        chunkSizeWarningLimit: 1500   // chunk 大小警告的限制（以 kbs 为单位）,LimitChunkCountPlugin在编写代码时，您可能已经添加了许多代码拆分点以按需加载内容。编译后，您可能会注意到一些块太小了-造成更大的HTTP开销。LimitChunkCountPlugin可以通过合并来对您的块进行后处理。
    },
    server: {
        port: 4000,
        open: true,  // boolean | string 设置服务启动时是否自动打开浏览器，当此值为字符串时，会被用作 URL 的路径名,
        cors: true, // 为开发服务器配置 CORS，配置为允许跨域
        proxy: {
            '/api': {
                target: '',
                changeOrigin: true,
                secure: false, // 支持https
                // rewrite: path => path.replace(/^/api/, '')
            }
        }
    }
})
