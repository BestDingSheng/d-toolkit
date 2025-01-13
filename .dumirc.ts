import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'deson',
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components' },
      { title: '工具', link: '/utils' },
    ],
  },
  favicons: ['/deson/favicon.ico'],
//   logo: '/logo.png',
  outputPath: 'site',
  base: '/deson/',
  publicPath: '/deson/',
  alias: {
    '@deson/components': process.cwd() + '/packages/components/src',
  },
}); 