// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chorus-SOP',
  tagline: 'Patient-Focused Collaborative Hospital Repository Uniting Standards (CHoRUS) for Equitable AI',
  favicon: 'img/chorus-ai.png',

  // Set the production url of your site here
  url: 'https://chorus-ai.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Chorus_SOP/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Chorus-ai', // Usually your GitHub org/user name.
  projectName: 'Chorus_SOP', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/chorus-ai/Chorus_SOP/edit/review/sop-website/',
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 6,
          blogTitle: 'Innovative Ideas!',
          blogDescription: 'Innovative ideas and discovers',
          blogSidebarTitle: 'Latest posts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:({locale, blogDirPath, blogPath, permalink}) =>
            `https://github.com/chorus-ai/Chorus_SOP/edit/review/sop-website/${blogDirPath}/${blogPath}`,
            editLocalizedFiles: false,
          include: ['**/*.{md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],
  themes: [
    'live-codeblock'
  ],
  plugins: [
    '@docusaurus/theme-mermaid',
    'docusaurus-theme-multi-codetabs',
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 85,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false
      }
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/chorus-ai.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'sopSidebar',
            position: 'left',
            label: 'SOPs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/chorus-ai/Chorus_SOP',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Homesite',
                href: 'https://chorus4ai.org/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/CHoRUS4AI',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Chorus-AI, Inc. Built with Docusaurus.`,
      },
      // announcementBar: {
      //   id: 'supportus', // Any value that will identify this message.
      //   content: "😏 The document is in development... 🤟"
      // },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      mermaid: {
        theme: { light: 'neutral', dark: 'forest' },
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
    }),
};

module.exports = config;
