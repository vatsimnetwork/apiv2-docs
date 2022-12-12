// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'APIv2',
    tagline: 'A simple API for VATSIM',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'vatsimnetwork', // Usually your GitHub org/user name.
    projectName: 'apiv2-docs', // Usually your repo name.

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
                    editUrl: 'https://github.com/vatsimnetwork/apiv2-docs/tree/master/docs/',
                    docLayoutComponent: "@theme/DocPage",
                    docItemComponent: "@theme/ApiItem",
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    plugins: [
        ['docusaurus-plugin-openapi-docs', {
            id: 'openapi',
            docsPluginId: 'classic',
            config: {
                vatsimApi: {
                    specPath: './openapi.yaml',
                    outputDir: 'docs/api',
                    sidebarOptions: {
                        groupPathsBy: 'tag',
                        categoryLinkSource: 'tag'
                    },
                },
            }
        }],
    ],

    themes: ['docusaurus-theme-openapi-docs'],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            docs: {
                sidebar: {
                    hideable: true,
                    autoCollapseCategories: true,
                },
            },
            navbar: {
                title: 'My Site',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'welcome',
                        position: 'left',
                        label: 'Documentation',
                    },
                ],
            },
            footer: {
                links: [
                    {
                        title: 'Sites',
                        items: [
                            {label: 'Homepage', href: 'https://vatsim.net/'},
                            {label: 'Support Helpdesk', href: 'https://support.vatsim.net/'},
                            {label: 'Community Discord', href: 'https://community.vatsim.net/'},
                            {label: 'MyVATSIM', href: 'https://my.vatsim.net/'},
                            {label: 'Statistics', href: 'https://stats.vatsim.net/'},
                            {label: 'Forums', href: 'https://forums.vatsim.net/'},
                            {label: 'Network Status', href: 'https://network-status.vatsim.net/'},
                        ],
                    },
                    {
                        title: 'Organization',
                        items: [
                            {label: 'Logos', href: 'https://vats.im/logo'},
                            {label: 'Brand Guidelines', href: 'https://vats.im/brand'},
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} VATSIM Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
