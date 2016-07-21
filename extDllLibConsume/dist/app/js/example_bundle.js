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

	module.exports = __webpack_require__(/*! example */1);


/***/ },
/* 1 */
/*!***************************!*\
  !*** ./src/js/example.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// dynamic requires
	var	dllResolver = __webpack_require__( /*! dll_lib/resolver */ 2 ),
		localResolve = function( expr, resolver ) {
			return resolver( expr );
		},
		add = localResolve( 'add', dllResolver ),
		subtract = localResolve( 'subtract', dllResolver ),

	// static requires
		add2 = __webpack_require__(/*! dll_lib/add */ 4),
		subtract2 = __webpack_require__(/*! dll_lib/subtract */ 5);

	module.exports.result = subtract(add(42, 2), 2);
	module.exports.result2 = subtract2(add2(42, 2), 2);

	console.log('results', module.exports);


/***/ },
/* 2 */
/*!**********************************************************!*\
  !*** delegated ./resolver.js from dll-reference dll_lib ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(1);

/***/ },
/* 3 */
/*!**************************!*\
  !*** external "dll_lib" ***!
  \**************************/
/***/ function(module, exports) {

	module.exports = dll_lib;

/***/ },
/* 4 */
/*!*****************************************************!*\
  !*** delegated ./add.js from dll-reference dll_lib ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(2);

/***/ },
/* 5 */
/*!**********************************************************!*\
  !*** delegated ./subtract.js from dll-reference dll_lib ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(3);

/***/ }
/******/ ]);