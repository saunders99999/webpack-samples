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
		filename: 'example_bundle.js',
		library: 'fred',
		libraryTarget: "umd"
	},
	devServer: {
        contentBase: "./dist",
    },
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new CopyWebpackPlugin([
			{ from: 'index.html', to: path.resolve('./dist') },
			{ from: '../extLib/dist', to: path.resolve('./dist/extLib/dist') }
		])
    ],
 //    externals: [
	// 	{ 'add' : 'matlock' },
	// 	{
	// 		'subtract': {
	// 			root: 'subtract',
	// 			commonjs2: './subtract',
	// 			commonjs: ['./math', 'subtract'],
	// 			amd: 'subtract'
	// 		}
	// 	}
	// ]
    externals: [
    	'matlock'
		// 'add',
		// {
		// 	subtract: {
		// 		root: 'matlock.subtract',
		// 		commonjs2: './subtract',
		// 		commonjs: ['./math', 'subtract'],
		// 		amd: 'subtract'
		// 	}
		// }
	]
};
