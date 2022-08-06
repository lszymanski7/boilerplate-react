const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const path = require('path')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	output: {
		filename: 'index.bundle.js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			// CSS & SCSS
			{
				test: /\.(scss|css)$/,
				use: [
					'style-loader', 
					'css-loader', 
					'sass-loader'
				]
			}
		]
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, '../dist')
		},
		client: {
			logging: 'warn'
		},
		compress: true,
		historyApiFallback: true,
		hot: true,
		open: true,
		port: 8080
	}
})
