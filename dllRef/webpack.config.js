'use strict';

var path = require('path'),
 	webpack = require('webpack'),
 	CleanWebpackPlugin = require('clean-webpack-plugin'),
	CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	resolve: {
		root: [
			path.resolve('./src')
		],
		alias: {
			'xyz'	: 'xyz/js',
			'app'	: 'js'
		}
	},
	entry: {
		main: [
			'app/example'
		]
	},
	output: {
		path: path.resolve('./dist/app/js'),
		pathinfo: true,
		filename: 'example_bundle.js'
	},
    devServer: {
        contentBase: "./dist"
        // outputPath: path.resolve('./dist')
    },
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new CopyWebpackPlugin([
			{ from: 'index.html', to: path.resolve('./dist') },
			{ from: '../dll1/dist', to: path.resolve('./dist/dll1/dist') }
		]),
		new webpack.DllReferencePlugin({
			scope: 'xyz',
			manifest: require('../dll1/dist/xyz/js/manifest.json')
		})
    ]
};

