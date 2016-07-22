'use strict';

var path = require('path'),
	webpack = require('webpack'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [{
	resolve: {
		root: [
			path.resolve('./dist/lib/js')
		]
	},
	entry: {
		main: [ 'manifest.json' ]
	},
	module: {
		loaders: [
			{ test: /\.json$/, loader: "json" }
		]
	},
	output: {
		path: path.resolve('./dist/lib/js'),
		pathinfo: true,
		filename: 'dll_lib_manifest.js',
		library: 'dll_lib_manifest',
		libraryTarget: "var"
	}
}];
