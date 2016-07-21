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
		main: [
			'example'
		]
	},
	output: {
		path: path.resolve('./dist/app/js'),
		pathinfo: true,
		filename: 'example_bundle.js'
	},
	devServer: {
        contentBase: "./dist"
    },
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new CopyWebpackPlugin([
			{ from: 'index.html', to: path.resolve('./dist') },
			{ from: '../extDllLib/dist', to: path.resolve('./dist/extLib/dist') }
		]),
		new webpack.DllReferencePlugin({
			scope: 'dll_lib',
			manifest: require('../extDllLib/dist/lib/js/manifest.json')
			// manifest: require('./dist/extLib/dist/lib/js/manifest.json')
		})
    ]
};
