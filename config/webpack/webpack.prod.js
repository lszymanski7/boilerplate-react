const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    stats: 'normal',
    output: {
        filename: 'static/js/[name].[contenthash:8].js',
        chunkFilename: 'static/js/[name].[contenthash:8].chunk.js'
    },
    module: {
        rules: [
            // CSS | SCSS
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            // Fonts
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: 'asset/inline',
                generator: {
                    filename: 'static/fonts/[name].[contenthash:8][ext]'
                }
            },
            // Images
            {
                test: /\.(png|jpe?g|gif|svg|ico|webp|tiff)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/images/[name].[contenthash:8][ext]'
                }
            },
            // Media
            {
                test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/media/[name].[contenthash:8][ext]'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css',
            chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
            ignoreOrder: false
        })
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false
                    }
                },
                extractComments: false,
                parallel: true
            }),
            new CssMinimizerPlugin()
        ]
    }
})
