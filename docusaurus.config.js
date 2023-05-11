// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Botanalytics Private Beta Documentation',
  tagline: 'Explore our tutorials and examples to integrate Botanalytics and get the most out of it',
  url: 'https://docs.beta.botanalytics.co',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'botanalytics', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

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
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Documentation',
        logo: {
          alt: 'Botanalytics',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'basics/intro',
            position: 'left',
            label: 'Basics',
          },
          {
            type: 'doc',
            docId: 'integration/overview',
            position: 'left',
            label: 'Integration',
          },
          {
            type: 'doc',
            docId: 'metrics/intro',
            position: 'left',
            label: 'Metrics',
          },
          {
            type: 'doc',
            docId: 'support',
            position: 'left',
            label: 'Support',
          },
          {
            href: 'https://github.com/botanalytics/docs',
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
                label: 'Basics',
                to: '/docs/basics/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Gitter',
                href: 'https://gitter.im/botanalytics/community',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/botanalyticsco',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'To Suggest Edits',
                href: 'https://github.com/botanalytics/docs',
              },
              {
                label: 'Other Repositories',
                href: 'https://github.com/botanalytics/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Botanalytics, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
