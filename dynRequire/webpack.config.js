'use strict';

var path = require('path'),
 	webpack = require('webpack'),
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
	module: {
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
	output: {
		path: path.resolve('./dist/web/app/js'),
		pathinfo: true,
		filename: 'example_bundle.js'
	},
    devServer: {
        contentBase: "./dist/web",
    }
};

