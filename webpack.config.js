const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		main: path.resolve(__dirname, './src/app.js')
	},
  	output: {
		path: path.resolve(__dirname, './public/dist'),
		filename: 'bundle.js',
		clean: true
  	},
	module: {
    	rules: [
			{
      			test: /\.(js|jsx)$/,
      			exclude: /node_modules/,
      			use: ['babel-loader']
      		}, {
				test: /\.(scss|css)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
    	]
  	},
	infrastructureLogging: {
		level: 'warn'
	},
	devServer: {
    	static: {
			directory: path.resolve(__dirname, './public')
		},
		port: 8080,
		compress: true,
		hot: false,
		open: false,
		liveReload: true
  	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "./public/index.html"),
			filename: 'index.html'
		})
	],
	mode: 'development',
	target: 'web',
	devtool: 'source-map'
}