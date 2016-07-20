define( [], function( )  {
	var vendorsModules = require('./vendors'),
	    vendorModuleId = './vendor-module',
	    vendorModule = vendorsModules[vendorModuleId];

	console.log('module', vendorModule);
})
