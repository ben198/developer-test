const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
    watch: true,
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\js?$/,
                exclude: [nodeModulesPath],
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: 'src/index.html'
        })
    ]
};