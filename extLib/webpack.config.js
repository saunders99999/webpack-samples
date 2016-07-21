'use strict';

var path = require('path'),
	webpack = require('webpack'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	resolve: {
		root: [
			path.resolve('./src/js')
		]
	},
	entry: {
		main: [ 'resolver' ]
	},
	output: {
		path: path.resolve('./dist/lib/js'),
		pathinfo: true,
		filename: 'dyn_lib.js',
		library: 'dyn_lib',
		libraryTarget: "var"
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new CopyWebpackPlugin([
			{ from: 'index.html', to: path.resolve('./dist') }
		])
    ]
};
