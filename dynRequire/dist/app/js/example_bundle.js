/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! app/example */1);


/***/ },
/* 1 */
/*!***************************!*\
  !*** ./src/js/example.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function( )  {
		var vendorsModules = __webpack_require__(/*! ./vendors */ 2),
		    vendorModuleId = './vendor-module',
		    vendorModule = vendorsModules[vendorModuleId];

		console.log('module', vendorModule);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))


/***/ },
/* 2 */
/*!***************************!*\
  !*** ./src/js/vendors.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var dep0 = __webpack_require__(/*! ./one */ 3);
	var dep1 = __webpack_require__(/*! ./two */ 4);
	var dep2 = __webpack_require__(/*! ./vendor-module */ 5);



	/*** EXPORTS FROM exports-loader ***/
	exports["./one"] = (dep0);
	exports["./two"] = (dep1);
	exports["./vendor-module"] = (dep2);


/***/ },
/* 3 */
/*!***********************!*\
  !*** ./src/js/one.js ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = "one"

/***/ },
/* 4 */
/*!***********************!*\
  !*** ./src/js/two.js ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = "two"

/***/ },
/* 5 */
/*!*********************************!*\
  !*** ./src/js/vendor-module.js ***!
  \*********************************/
/***/ function(module, exports) {

	module.exports = "vendor-module"

/***/ }
/******/ ]);