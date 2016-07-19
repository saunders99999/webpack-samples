// http://stackoverflow.com/questions/35049806/dynamically-require-vendor-module-with-webpack
define( [], function( )  {
	var vendorsModules = require('./vendors'),
	    vendorModuleId = 'vendor-module',
	    vendorModule = vendorsModules[vendorModuleId];

	console.log('module', vendorModule);
})
