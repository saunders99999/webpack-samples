'use strict';

// dynamic requires
var	dllResolver = require( 'dll_lib/resolver' ),
	localResolve = function( expr, resolver ) {
		return resolver( expr );
	},
	add = localResolve( 'add', dllResolver ),
	subtract = localResolve( 'subtract', dllResolver ),

// static requires
	add2 = require('dll_lib/add'),
	subtract2 = require('dll_lib/subtract');

module.exports.result = subtract(add(42, 2), 2);
module.exports.result2 = subtract2(add2(42, 2), 2);

console.log('results', module.exports);
