(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	/**
	 * author:Vi
	 * waring: getcomputedstyle is not supported under IE8
	 * check http://caniuse.com/#feat=getcomputedstyle
	 */


	/**
	 * @param {Element} el Description
	 * @param {String} prop Description
	 * @param {String} val Description
	 * @return {void} description
	 */
	function Css(el, prop, val) {
	    if (!el) return;
	    else if (arguments.length == 2) {
	        if (typeof prop == 'object') {
	            setCssObj(el, prop)
	        } else {
	            return getCss(el, prop)
	        }
	    } else {
	        setCss(el, prop, val)
	    }
	}

	/**
	 * @param {Element} el Description
	 * @param {String} prop Description
	 * @return {void} description
	 */
	function getCss(el, prop) {
	    return getComputedStyle ? getComputedStyle(el).getPropertyValue(prop) : false;
	}

	/**
	 * @param {Element} el Description
	 * @param {String} prop Description
	 * @param {String} val Description
	 * @return {void} description
	 */
	function setCss(el, prop, val) {
	    if (typeof(val) == 'string') {
	        var css = prop + ":" + val + ';';
	        el.style.cssText += css;
	    }
	}

	/**
	 * @param {Element} el Description
	 * @param {Object} obj Description
	 * @return {void} description
	 */
	function setCssObj(el, obj) {
	    for (var key in obj) {
	        setCss(el, key, obj[key]);
	    }
	}

	module.exports = {
	    Css: Css
	}


/***/ }
/******/ ])
});
;