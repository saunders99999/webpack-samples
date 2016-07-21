'use strict';

var result,
	extResolver = require('dyn_lib'),
	localResolve = function( expr, resolver ) {
		return resolver( expr );
	},
	add = localResolve( 'add', extResolver ),
	subtract = localResolve( 'subtract', extResolver );

	result = subtract(add(42, 2), 2);

console.log('result', result);
exports.exampleValue = subtract(add(42, 2), 2);