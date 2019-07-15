const head = [
  [
    'link',
    {
      rel: 'icon',
      href: '/favicon.png',
      type: 'image/x-icon',
    },
  ],
];

const foot = {
  friendList: [
    {
      title: 'Github',
      list: [
        {
          name: 'Organization',
          url: 'https://github.com/eggjs',
        },
        { name: 'Example', url: 'https://github.com/eggjs/examples' },
      ],
    },
    {
      title: 'Links',
      list: [
        { name: 'Ant Design', url: 'https://ant.design' },
        { name: 'Antv', url: 'https://antv.alipay.com/' },
      ],
    },
    {
      title: 'Community',
      list: [
        {
          name: 'FAQ',
          url: 'https://eggjs.org/zh-cn/faq.html',
        },
      ],
    },
    {
      title: 'Lark',
      list: [
        {
          name: 'Node.js 专栏',
          url: 'https://www.yuque.com/egg/nodejs',
        },
      ],
    },
  ],
  copyright: [{ text: 'Copyright © 2019 Egg.js' }],
};

module.exports = {
  siteConfig: {
    head,
    locales: {
      '/': {
        lang: 'en-US',
        title: 'Egg.js',
        description: 'Development Guide for Egg.js',
      },
      '/zh-CN/': {
        lang: 'zh-CN',
        title: 'Egg.js',
        description: 'Egg.js 开发指引',
      },
    },
    themeConfig: {
      logo: '/logo.svg',
      repo: 'https://github.com/thonatos/eggjs.dev',
      docsBranch: 'docs',
      docsDir: 'docs',
      editLinks: true,
      locales: {
        '/': {
          nav: [
            { text: 'Home', link: '/' },
            { text: 'Contributing', link: '/contributing/' },
            { text: 'Development', link: '/development/' },
          ],
          sidebar: {
            '/contributing/': [['./', 'Contributing']],
            '/development/': [['./', 'Development'], 'plugins', 'cli'],
          },
          foot,
        },
        '/zh-CN/': {
          nav: [
            { text: 'Home', link: '/' },
            { text: 'Contributing', link: '/zh-CN/contributing/' },
            { text: 'Development', link: '/zh-CN/development/' },
          ],
          sidebar: {
            '/zh-CN/contributing/': [['./', '如何贡献']],
            '/zh-CN/development/': [['./', '开发文档'], 'plugins', 'cli'],
          },
          foot,
        },
      },
    },
  },
  theme: '@eggjs/vuepress-theme-egg',
};
