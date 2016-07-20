'use strict';

var path = require('path'),
	webpack = require('webpack'),
	CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	resolve: {
		root: [
			path.resolve('./src')
		],
		alias: {
			'xyz'	: 'xyz/js'
		}
	},
	entry: {
		main: [
			'xyz/logger'
		]
	},
	output: {
		path: path.resolve('./dist/xyz/js'),
		pathinfo: true,
		filename: 'xyz_[name].js',
		library: 'xyz_[name]'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.DllPlugin({
			context: path.resolve('./src/xyz/js'),
			path: path.resolve('./dist/xyz/js/manifest.json'),
			name: 'xyz_[name]'
		}),
    ]
};
