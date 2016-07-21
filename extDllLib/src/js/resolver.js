'use strict';

define( function( require ){   
	return function resolve( request ){
		switch ( request ) {
			case 'add':
				return require( './add' );
			case 'subtract':
				return require( './subtract' );
			default: {
				console.log('bad module');
				return;
			}
		}
	};
});