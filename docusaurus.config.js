// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Private Beta Documentation',
  tagline: "Welcome! Here you can access the complete documentation for the Botanalytics's Private Beta Product.",
  url: 'https://docs.beta.botanalytics.co',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://cdn.botanalytics.co/media/ui/dashboard/icon@3x.png',
  organizationName: 'botanalytics', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'ignore',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/botanalytics/docs/tree/master/',
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
            type: 'doc',
            docId: 'postman/intro',
            position: 'left',
            label: 'Postman'
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
                label: 'Slack',
                href: 'https://join.slack.com/t/botanalytics-family/shared_invite/zt-1uzzs7rwk-axtZDb5~ddeNGggpxnXKYA',
              },
              {
                label: 'Gitter',
                href: 'https://gitter.im/botanalytics/community',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/botanalyticsco',
              },
              {
                label: 'Frill',
                href: 'https://feedback.beta.botanalytics.co'
              }
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
        copyright: `Copyright © ${new Date().getFullYear()} Botanalytics, Inc. | <a target="_blank" href="https://botanalytics.co/terms" style="color: #ebedf0;
    line-height: 2">Terms of Service</a> | <a target="_blank" href="https://botanalytics.co/privacy" style="color: #ebedf0;
    line-height: 2">Privacy Policy</a> `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
      },
    }),
};

module.exports = config;
