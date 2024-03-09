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
          editUrl: 'https://github.com/IO0288/IODocs/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/IO0288/IODocs/tree/masters',
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
  titleDelimiter: '🤪', // 默认为 `|`🦖
  
  // 原样构建输出(路径)
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
  baseUrlIssueBanner: true,
  
  // 主题
  themes: [
    // '@docusaurus/theme-classic',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        // language: ['en', 'zh'],
        language: ['zh'],
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blog',
        docsDir: 'docs',
        blogDir: 'blog',
        highlightSearchTermsOnTargetPage: true,// 结果高亮
        // ignoreFiles: /.*/,// 忽略文件(正则表达式)
        translations: {
          "search_placeholder": "搜索",
          "see_all_results": "查看所有结果",
          "no_results": "没有结果。",
          "search_results_for": "搜索结果 \"{{ keyword }}\"",
          "search_the_documentation": "搜索文档",
          "count_documents_found": "{{ count }} 个结果",
          "count_documents_found_plural": "{{ count }} 个文档找到",
          "no_documents_were_found": "没有找到文档"
        }
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
              label: 'Mastodon/Misskey',
              href: 'https://hello.io0288.cn/@IO0288',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              // to: '/blog',
              href: 'https://blog.io0288.cn',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/io0288/IODocs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://blog.io0288.cn" class="footer__link-item">IO0288</a>, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  }),
  // 翻译
  i18n: {
    defaultLocale: 'zh',
    // locales: ['zh', 'en'],
    locales: ['zh'],
    localeConfigs: {
      zh: {
        label: '中文(简体)',
        direction: 'ltr',
        htmlLang: 'zh-Hans-CN',// 中华人民共和国大陆简体中文
      },
      // en: {
      //   label: 'English',
      //   direction: 'ltr',
      //   htmlLang: 'en-US',
      // },
    },
  },
  // 插件
  plugins: [
    [
      // PWA支持
      '@docusaurus/plugin-pwa',
      {
        // debug: true,
        offlineModeActivationStrategies: [
          // 'appInstalled',
          // 'standalone',
          // 'queryString',
          // 'mobile',
          'always',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/docusaurus.svg',
            color: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/docusaurus.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
  // 自定义字段
  customFields: {
    // image: '',
    // keywords: [],
  },
};

module.exports = config;
