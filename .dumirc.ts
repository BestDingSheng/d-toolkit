import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'd-toolkit',
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components' },
      { title: '工具', link: '/utils' },
    ],
  },
  favicons: ['/d-toolkit/favicon.ico'],
//   logo: '/logo.png',
  outputPath: 'site',
  base: '/d-toolkit/',
  publicPath: '/d-toolkit/',
  history: {
    type: 'browser',
  },
  alias: {
    '@d-toolkit/components': process.cwd() + '/packages/components/src',
  },
}); 