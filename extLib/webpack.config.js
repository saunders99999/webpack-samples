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
	entry: [
		'boot'
	],
	output: {
		path: path.resolve('./dist/lib/js'),
		pathinfo: true,
		filename: 'example_library.js',
		library: 'matlock',
		libraryTarget: "var"
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new CopyWebpackPlugin([
			{ from: 'index.html', to: path.resolve('./dist') }
		])
    ]
};
