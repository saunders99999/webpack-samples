'use strict';

var path = require('path'),
	webpack = require('webpack'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [{
	resolve: {
		root: [
			path.resolve('./src/js')
		]
	},
	entry: {
		main: [ 'add', 'subtract' ]
	},
	output: {
		path: path.resolve('./dist/lib/js'),
		pathinfo: true,
		filename: 'dll_lib.js',
		library: 'dll_lib',
		libraryTarget: "var"
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new CopyWebpackPlugin([
			{ from: 'index.html', to: path.resolve('./dist') }
		]),
		new webpack.DllPlugin({
			context: path.resolve('./src/js'),
			path: path.resolve('./dist/lib/js/manifest.json'),
			name: 'dll_lib'
		}),
    ]
}];
