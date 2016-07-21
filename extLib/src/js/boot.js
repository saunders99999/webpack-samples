'use strict';

define( function( require ){
	var add = require( './add' ),
	    subtract = require( './subtract' );

	return {
		add: add,
		subtract: subtract
	};
});