'use strict';

var path = require('path'),
 	webpack = require('webpack'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	CopyWebpackPlugin = require('copy-webpack-plugin');

var vendorsModules = [
	'./one', './two', './vendor-module'
];

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
        contentBase: "./dist",
    },
	module: {
		// http://stackoverflow.com/questions/35049806/dynamically-require-vendor-module-with-webpack
		loaders: [
			{
				include: require.resolve( './src/js/vendors.js'),
				// loader: 'file?name=outFile.txt' + '!imports-loader?' + vendorsModules.map(function(module, index) {
				loader: 'imports-loader?' + vendorsModules.map(function(module, index) {
            		return 'dep' + index + '=' + module;
        		}).join(',')+ '!exports-loader?' + vendorsModules.map(function(module, index) {
		            return module + '=dep' + index;
		        }).join(',')
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new CopyWebpackPlugin([
			{ from: 'index.html', to: path.resolve('./dist') }
		])
    ]
};

