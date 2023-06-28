import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import md from 'vite-plugin-md';
export default defineConfig({
    server: {
        port: 8080,
        host: true,
        open: false,
        proxy: {
            '/api': {
                target: 'https://file.codetest.org.cn/bookdemo',
                changeOrigin: true,
                rewrite: (p) => p.replace(/^\/api/, ''),
                // pathRewrite: {
                //     ["^/api"]: "",
                //   },
            },
        },
    },
    plugins: [
        vue(
            {
                include: [/\.vue$/, /\.md$/]
            }
        ),
        md({ builders: [] }),
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
    resolve: {
        alias: [
            {
                find: "@antv/x6",
                replacement: "@antv/x6/lib",
            },
            {
                find: "@antv/x6-vue-shape",
                replacement: "@antv/x6-vue-shape/lib",
            },
            {
                find: '~',
                replacement: path.resolve(__dirname, './'),
            },
            {
                find: '@',
                replacement: path.resolve(__dirname, './src'),
            },
        ],
    },
    module: {
        rules: [
          {
            test: /\.md$/,
            use: [
              {
                loader: 'raw-loader',
              },
            ],
          },
        ],
      },
});
