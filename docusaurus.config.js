// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IODocs',// 网站名
  tagline: 'IO0288\'s Docs',// 网站描述
  url: 'https://io0288.github.io/',
  baseUrl: '/IODocs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'IO0288', // Usually your GitHub org/user name.
  projectName: 'IODocs', // Usually your repo name.
  deploymentBranch: 'gh-pages',// 部署的分支
  trailingSlash: 'false',

  // 预设
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
              'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  // 标题分隔符
  // titleDelimiter: '🦖', // 默认为 `|`

  // 原样构建输出
  staticDirectories: ['static'],

  // 引入css样式
  // stylesheets: [
  //   'https://docusaurus.io/style.css',
  // ],

  // 引入js
  // scripts: [
  //   'https://docusaurus.io/script.js',
  // ],

  // 启用错误提示
  // baseUrlIssueBanner: true,

  // 主题
  themes: [
    // '@docusaurus/theme-classic',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["zh", "en"],
        // ```
      },
    ]
  ],
  // 主题配置
  themeConfig: ({
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    // SEO优化 元数据
    // metadata: [{name: 'keywords', content: 'cooking, blog'}],
    metadata: [
      {name: 'keywords', content: 'IO0288, Docs, 文档'},
      {name: 'description', content: 'IO0288的文档库，基于docusaurus，部署于GitHub Pages'},
    ],
    // This would become <meta name="keywords" content="cooking, blog"> in the generated HTML
    navbar: {
      title: 'IODocs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '文档',
        },
        {
          to: '/blog',
          label: '博客',
          position: 'left'
        },
        // 语言选择
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/IO0288/IODocs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '文档',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '社区',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
            {
              label: 'Twitter推特',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  }),
  // 翻译
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    // locales: ['zh'],
    localeConfigs: {
      zh: {
        label: '中文(简体)',
        direction: 'ltr',
        htmlLang: 'zh-Hans-CN',// 中华人民共和国大陆简体中文
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
    },
  },
  // 插件
  // plugins: [
  //   // 'docusaurus-plugin-awesome',
  //   // ['docusuarus-plugin-confetti', {fancy: false}],
  //   // () => ({
  //   //   postBuild() {
  //   //     console.log('Build finished');
  //   //   },
  //   // }),
  // ],
  // 自定义字段
  customFields: {
    // image: '',
    // keywords: [],
  },
};

module.exports = config;
