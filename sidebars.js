/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    sidebar: [
        'welcome',
        {
            type: 'category',
            label: 'VATSIM API',
            link: { type: 'doc', id: 'api/vatsim-api' },
            items: require('./docs/api/sidebar.js'),
        },
        {
            type: 'category',
            label: 'Models',
            items: [{ type: 'autogenerated', dirName: 'models' }],
        },
        {
            type: 'category',
            label: 'Webhooks',
            link: { type: 'doc', id: 'webhooks/index' },
            items: [{ type: 'autogenerated', dirName: 'webhooks' }],
        },
    ],
};

module.exports = sidebars;
