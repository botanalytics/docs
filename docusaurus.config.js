// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { ProvidePlugin } = require("webpack");
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
  customFields: {
    apiBaseEndPoint: "https://api.beta.botanalytics.co/v2",
    messagesEndpoint: "/messages"
  },

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

  plugins: [
    "docusaurus-plugin-sass",
    // Add custom webpack config to make @stoplight/elements work
    () => ({
      name: "custom-webpack-config",
      configureWebpack: () => {
        return {
          module: {
            rules: [
              {
                test: /\.m?js/,
                resolve: {
                  fullySpecified: false,
                },
              },
            ],
          },
          plugins: [
            new ProvidePlugin({
              process: require.resolve("process/browser"),
            }),
          ],
          resolve: {
            fallback: {
              buffer: require.resolve("buffer"),
              stream: false,
              path: false,
              process: false,
            },
          },
        };
      },
    }),
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
            docId: 'get-started/intro',
            position: 'left',
            label: 'Get Started',
            activeBasePath: 'docs/get-started',
          },
          {
            type: 'doc',
            docId: 'integration/overview',
            position: 'left',
            label: 'Integration',
            activeBasePath: 'docs/integration',
          },
          {
            type: 'doc',
            docId: 'metrics/intro',
            position: 'left',
            label: 'Metrics',
            activeBasePath: 'docs/metrics',
          },
          {
            type: 'doc',
            docId: 'support',
            position: 'left',
            label: 'Support',
            activeBasePath: 'docs/support',
          },
          {
            type: 'doc',
            docId: 'postman/intro',
            position: 'left',
            label: 'Postman',
            activeBasePath: 'docs/postman',
          },
          {
            href: 'https://github.com/botanalytics/docs',
            label: 'GitHub',
            position: 'right',
          },
          { to: "/api/" },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/get-started/intro',
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
        additionalLanguages: ['powershell', 'http'],
      },
    }),
};

module.exports = config;
