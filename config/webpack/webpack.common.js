const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../../build'),
        clean: true
    },
    module: {
        rules: [
            // JavaScript
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            // HTML
            {
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../../public/robots.txt'),
                    to: 'robots.txt'
                }
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            favicon: path.resolve(__dirname, '../../public/favicon.ico'),
            template: path.resolve(__dirname, '../../public/index.html'),
            inject: 'body',
            minify: {
                removeComments: true
            }
        })
    ]
}
