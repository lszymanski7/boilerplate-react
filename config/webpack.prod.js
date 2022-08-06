const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	output: {
		filename: 'index.[contenthash].bundle.js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			// CSS & SCSS
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader, 
					'css-loader', 
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles.[contenthash].css',
			ignoreOrder: false
		})
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: false,
				parallel: true
			}),
			new CssMinimizerPlugin()
		]
	}
})
