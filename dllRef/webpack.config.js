'use strict';

var path = require('path'),
 	webpack = require('webpack'),
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
		path: path.resolve('./dist/web/app/js'),
		pathinfo: true,
		filename: 'example_bundle.js'
	},
    devServer: {
        contentBase: "./dist/web",
    },
	plugins: [
		new webpack.DllReferencePlugin({
			// context: path.resolve('../dll1/dist'),
			scope: 'xyz',
			// name: 'js/lib1_main.js',
			// sourceType: 'umd',
			manifest: require('../dll1/dist/xyz/js/manifest.json')
			// content: { }
		}),
		new CopyWebpackPlugin([
			{ from: 'index.html', to: path.resolve('./dist/web') },
			{ from: '../dll1/dist', to: path.resolve('./dist/web/dll1/dist') }
		])
    ]
};

