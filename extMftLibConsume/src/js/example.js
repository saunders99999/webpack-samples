'use strict';

var	dllLibManifest = require( 'dll_lib_manifest' ).content,
	dllLib = require( 'dll_lib'),
	localResolve = function( expr ) {
		return dllLib( dllLibManifest[ expr ] )
	},
	add = localResolve( './add.js' ),
	subtract = localResolve( './subtract.js' );

module.exports.result = subtract(add(42, 2), 2);
console.log('results', module.exports);
