
const path = require('path')

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/styles/index.sass'),

            ],
        })
}

module.exports = {
    siteName: 'Metal Law Group',
    icon: './src/images/favicon.png',
    siteDescription: '',
    // WordPress API is no longer available at build time; employee pages
    // were already empty on the last successful deploy.
    plugins: [],
    chainWebpack(config) {
        // Load variables for all vue-files
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

        types.forEach(type => {
            addStyleResource(config.module.rule('sass').oneOf(type))
        })

        // or if you use scss
        // types.forEach(type => {
        //     addStyleResource(config.module.rule('scss').oneOf(type))
        // })

        config.mode('development')
    },
    templates: {}
}
