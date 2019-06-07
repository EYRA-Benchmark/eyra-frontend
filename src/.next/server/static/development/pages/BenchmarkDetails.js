module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/entries.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/entries.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/entries */ "core-js/library/fn/object/entries");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "../node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "../node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./components/DataFileCard/index.tsx":
/*!*******************************************!*\
  !*** ./components/DataFileCard/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./components/DataFileCard/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);










var DataFileCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DataFileCard, _React$Component);

  function DataFileCard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DataFileCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DataFileCard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DataFileCard, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.container
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.header
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("h5", null, "Benchmark Specific Dataset"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.iconsContainer
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Fab"], {
        size: "small"
      }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["CloudDownload"], null)), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Fab"], {
        size: "small"
      }, "DOI"))), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("p", null, "Filterbank format: Standard radio astronomical data format, consisting of a real frequency/time intensity array. Data should be 8bit with correct header information. Filterbank files will have a simulated Gaussian noise background"));
    }
  }]);

  return DataFileCard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DataFileCard);

/***/ }),

/***/ "./components/DataFileCard/style.css":
/*!*******************************************!*\
  !*** ./components/DataFileCard/style.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "style__container--2JbXC",
	"header": "style__header--2hjFE",
	"iconsContainer": "style__iconsContainer--1N3Os"
};

/***/ }),

/***/ "./components/Forms/Algorithm/AlgorithmSubmission.module.css":
/*!*******************************************************************!*\
  !*** ./components/Forms/Algorithm/AlgorithmSubmission.module.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "AlgorithmSubmission-module__container--33u-P",
	"inputContainer": "AlgorithmSubmission-module__inputContainer--3z1Jk"
};

/***/ }),

/***/ "./components/Forms/Algorithm/AlgorithmSubmission.tsx":
/*!************************************************************!*\
  !*** ./components/Forms/Algorithm/AlgorithmSubmission.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _services_comicApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/comicApi */ "./services/comicApi.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _AlgorithmSubmission_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AlgorithmSubmission.module.css */ "./components/Forms/Algorithm/AlgorithmSubmission.module.css");
/* harmony import */ var _AlgorithmSubmission_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_AlgorithmSubmission_module_css__WEBPACK_IMPORTED_MODULE_11__);












var initialValues = {
  id: '',
  name: '',
  description: '',
  containerName: ''
};

var onSubmit =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee(values, _ref) {
    var setSubmitting, algorithm;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setSubmitting = _ref.setSubmitting;
            _context.prev = 1;
            _context.next = 4;
            return _services_comicApi__WEBPACK_IMPORTED_MODULE_7__["comicApi"].algorithmSubmission({
              benchmark: values.id,
              name: values.name,
              description: values.description,
              container: values.containerName
            });

          case 4:
            algorithm = _context.sent;
            console.log(algorithm);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 11:
            setSubmitting(false);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function onSubmit(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

var AlgorithmSubmission =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AlgorithmSubmission, _React$Component);

  function AlgorithmSubmission() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AlgorithmSubmission);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AlgorithmSubmission).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AlgorithmSubmission, [{
    key: "render",
    value: function render() {
      var benchmarkId = this.props.benchmarkId;
      var defaultValue = '<b>Add Description Here..</b><br/>' + '<p>Here You can add description or paste HTML/ Markdown code for description in left Container</p>';
      initialValues.id = benchmarkId;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_9__["Formik"], {
        initialValues: initialValues,
        onSubmit: onSubmit
      }, function (_ref3) {
        var isSubmitting = _ref3.isSubmitting,
            setFieldValue = _ref3.setFieldValue;
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_9__["Form"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: _AlgorithmSubmission_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.container
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: _AlgorithmSubmission_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.inputContainer
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
          htmlFor: "name"
        }, "Name"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_9__["Field"], {
          name: "name",
          type: "text",
          placeholder: "Submission Name",
          autoFocus: true
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: _AlgorithmSubmission_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.inputContainer
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
          htmlFor: "description"
        }, "Description")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: _AlgorithmSubmission_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.inputContainer
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
          htmlFor: "containerName"
        }, "Container"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_9__["Field"], {
          name: "containerName",
          type: "text",
          placeholder: "Container Name"
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: _AlgorithmSubmission_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.inputContainer
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          variant: "outlined",
          color: "primary",
          disabled: isSubmitting,
          type: "submit"
        }, "Submit"))));
      });
    }
  }]);

  return AlgorithmSubmission;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AlgorithmSubmission);

/***/ }),

/***/ "./components/Leaderboard/LeaderboardHead/LeaderboardHead.tsx":
/*!********************************************************************!*\
  !*** ./components/Leaderboard/LeaderboardHead/LeaderboardHead.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);











var Leaderboard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Leaderboard, _React$Component);

  function Leaderboard() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Leaderboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Leaderboard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "createSortHandler", function (property) {
      return function (event) {
        _this.props.onRequestSort(event, property);
      };
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Leaderboard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var rows = [{
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: 'Name'
      }].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.props.metricFields.map(function (fieldName) {
        return {
          id: fieldName,
          numeric: true,
          disablePadding: false,
          label: fieldName
        };
      })), [{
        id: 'date',
        numeric: true,
        disablePadding: false,
        label: 'Date'
      }]);
      var _this$props = this.props,
          order = _this$props.order,
          orderBy = _this$props.orderBy;
      return react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableHead"], null, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableRow"], null, rows.map(function (row) {
        return react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableCell"], {
          key: row.id,
          align: row.numeric ? 'right' : 'left',
          padding: row.disablePadding ? 'none' : 'default',
          sortDirection: orderBy === row.id ? order : false
        }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
          title: "Sort",
          placement: row.numeric ? 'bottom-end' : 'bottom-start',
          enterDelay: 300
        }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TableSortLabel"], {
          active: orderBy === row.id,
          direction: order,
          onClick: _this2.createSortHandler(row.id)
        }, row.label)));
      }, this)));
    }
  }]);

  return Leaderboard;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Leaderboard);

/***/ }),

/***/ "./components/Leaderboard/LeaderboardTable/LeaderboardTable.tsx":
/*!**********************************************************************!*\
  !*** ./components/Leaderboard/LeaderboardTable/LeaderboardTable.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _LeaderboardHead_LeaderboardHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../LeaderboardHead/LeaderboardHead */ "./components/Leaderboard/LeaderboardHead/LeaderboardHead.tsx");
/* harmony import */ var _LeaderboardTableStyle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LeaderboardTableStyle */ "./components/Leaderboard/LeaderboardTable/LeaderboardTableStyle.tsx");














function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function stableSort(array, cmp) {
  var stabilizedThis = array.map(function (el, index) {
    return [el, index];
  });
  stabilizedThis.sort(function (a, b) {
    var order = cmp(a[0], b[0]);

    if (order !== 0) {
      return order;
    }

    return a[1] - b[1];
  });
  return stabilizedThis.map(function (el) {
    return el[0];
  });
}

function getSorting(order, orderBy) {
  return order === 'desc' ? function (a, b) {
    return desc(a, b, orderBy);
  } : function (a, b) {
    return -desc(a, b, orderBy);
  };
}

var LeaderboardTable =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(LeaderboardTable, _React$Component);

  function LeaderboardTable() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, LeaderboardTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(LeaderboardTable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      order: 'asc',
      orderBy: 'score'
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleRequestSort", function (event, property) {
      var orderBy = property;
      var order = 'desc';

      if (_this.state.orderBy === property && _this.state.order === 'desc') {
        order = 'asc';
      }

      _this.setState({
        order: order,
        orderBy: orderBy
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(LeaderboardTable, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var _this$state = this.state,
          order = _this$state.order,
          orderBy = _this$state.orderBy;

      var metricFields = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(this.props.submissions[0].metrics_json);

      var data = this.props.submissions.map(function (submission) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          name: submission.algorithm.name,
          date: submission.created
        }, submission.metrics_json);
      });
      return react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Paper"], {
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("div", {
        className: classes.tableWrapper
      }, react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Table"], {
        className: classes.table,
        "aria-labelledby": "tableTitle"
      }, react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_LeaderboardHead_LeaderboardHead__WEBPACK_IMPORTED_MODULE_11__["default"], {
        order: order,
        orderBy: orderBy,
        onRequestSort: this.handleRequestSort,
        rowCount: data.length,
        metricFields: metricFields
      }), react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TableBody"], null, stableSort(data, getSorting(order, orderBy)).map(function (n, i) {
        return react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TableRow"], {
          hover: true,
          tabIndex: -1,
          key: i
        }, react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TableCell"], {
          component: "th",
          scope: "row"
        }, n.name), metricFields.map(function (fieldName, j) {
          return react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TableCell"], {
            key: j,
            align: "right"
          }, n[fieldName]);
        }), react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TableCell"], {
          align: "right"
        }, n.date));
      })))));
    }
  }]);

  return LeaderboardTable;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["withStyles"])(_LeaderboardTableStyle__WEBPACK_IMPORTED_MODULE_12__["default"])(LeaderboardTable));

/***/ }),

/***/ "./components/Leaderboard/LeaderboardTable/LeaderboardTableStyle.tsx":
/*!***************************************************************************!*\
  !*** ./components/Leaderboard/LeaderboardTable/LeaderboardTableStyle.tsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);


var styles = function styles(theme) {
  return Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3
    },
    table: {
      minWidth: 500
    },
    tableWrapper: {
      overflowX: 'auto'
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./components/Leaderboard/index.tsx":
/*!******************************************!*\
  !*** ./components/Leaderboard/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _LeaderboardTable_LeaderboardTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LeaderboardTable/LeaderboardTable */ "./components/Leaderboard/LeaderboardTable/LeaderboardTable.tsx");
/* harmony import */ var _services_comicApi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/comicApi */ "./services/comicApi.ts");













 // Omit allows one to remove a property from a type/interface

var Leaderboard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Leaderboard, _React$Component);

  function Leaderboard() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Leaderboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Leaderboard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "state", {
      submissions: [],
      isLoading: true
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Leaderboard, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var submissions, evaluatedSubmissions, nestedSubmissions;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _services_comicApi__WEBPACK_IMPORTED_MODULE_13__["comicApi"].submissions({
                  benchmark: this.props.benchmarkID
                });

              case 2:
                submissions = _context2.sent;
                evaluatedSubmissions = submissions.filter(function (submission) {
                  return submission.metrics_json !== null;
                });
                nestedSubmissions = [];
                _context2.next = 7;
                return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.all(evaluatedSubmissions.map(
                /*#__PURE__*/
                function () {
                  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
                  /*#__PURE__*/
                  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(submission) {
                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.t0 = nestedSubmissions;
                            _context.t1 = _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"];
                            _context.t2 = {};
                            _context.t3 = submission;
                            _context.next = 6;
                            return _services_comicApi__WEBPACK_IMPORTED_MODULE_13__["comicApi"].algorithm(submission.algorithm);

                          case 6:
                            _context.t4 = _context.sent;
                            _context.t5 = {
                              algorithm: _context.t4
                            };
                            _context.t6 = (0, _context.t1)(_context.t2, _context.t3, _context.t5);

                            _context.t0.push.call(_context.t0, _context.t6);

                          case 10:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 7:
                this.setState({
                  submissions: nestedSubmissions,
                  isLoading: false
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: "render",
    value: function render() {
      if (this.state.isLoading) {
        return react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("div", null, "Loading...");
      }

      if (this.state.submissions.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("div", null, "No submissions found...");
      }

      return react__WEBPACK_IMPORTED_MODULE_11__["createElement"](_LeaderboardTable_LeaderboardTable__WEBPACK_IMPORTED_MODULE_12__["default"], {
        submissions: this.state.submissions
      });
    }
  }]);

  return Leaderboard;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Leaderboard);

/***/ }),

/***/ "./components/Logs/Logs.module.css":
/*!*****************************************!*\
  !*** ./components/Logs/Logs.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"tableContainer": "Logs-module__tableContainer--2P6Fo"
};

/***/ }),

/***/ "./components/Logs/index.tsx":
/*!***********************************!*\
  !*** ./components/Logs/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_comicApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/comicApi */ "./services/comicApi.ts");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Spinner */ "./components/Spinner/index.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Logs_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Logs.module.css */ "./components/Logs/Logs.module.css");
/* harmony import */ var _Logs_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Logs_module_css__WEBPACK_IMPORTED_MODULE_13__);















var Logs =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Logs, _React$Component);

  function Logs() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Logs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Logs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      logs: null,
      jobs: [{
        id: 'f4bd7b29-6d07-4107-aa97-7dd697b4c0d8',
        creator: 10,
        created: '2019-04-04T14:57:41.253723Z',
        modified: '2019-04-04T14:57:41.386793Z',
        short_description: '',
        description: '',
        name: 'Toms Beaama',
        evaluator: null,
        training_data_file: null,
        training_ground_truth_data_file: null,
        test_data_file: null,
        test_ground_truth_data_file: null,
        interface: null,
        admin_group: 8,
        permissions: ['change_benchmark']
      }]
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Logs, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.state.logs !== nextState.logs;
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = this;
                _context.next = 3;
                return _services_comicApi__WEBPACK_IMPORTED_MODULE_10__["comicApi"].jobs();

              case 3:
                _context.t1 = _context.sent;
                _context.t2 = {
                  logs: _context.t1
                };

                _context.t0.setState.call(_context.t0, _context.t2);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "getContent",
    value: function getContent() {
      if (this.state.jobs === null) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_11__["default"], null);
      } else {
        var job = this.state.jobs[0];
        var created = job.created;
        var modified = job.modified;
        var content = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Typography"], {
          component: "div",
          className: _Logs_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.tableContainer
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Table"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableHead"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], null, "Name"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], null, "Created"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], null, "Modified"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], null, "Description"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableBody"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], null, job.name), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], null, new Date(created).toUTCString()), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], null, new Date(modified).toUTCString()), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TableCell"], null, job.description)))));
        return content;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.getContent();
    }
  }]);

  return Logs;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Logs);

/***/ }),

/***/ "./components/Spinner/Spinner.module.css":
/*!***********************************************!*\
  !*** ./components/Spinner/Spinner.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"loader": "Spinner-module__loader--3bKTG",
	"load6": "Spinner-module__load6--2qZyV",
	"round": "Spinner-module__round--1StZZ"
};

/***/ }),

/***/ "./components/Spinner/index.tsx":
/*!**************************************!*\
  !*** ./components/Spinner/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Spinner_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spinner.module.css */ "./components/Spinner/Spinner.module.css");
/* harmony import */ var _Spinner_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Spinner_module_css__WEBPACK_IMPORTED_MODULE_1__);



var spinner = function spinner() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Spinner_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.loader
  }, "Loading..");
};

/* harmony default export */ __webpack_exports__["default"] = (spinner);

/***/ }),

/***/ "./pages/BenchmarkDetails/DetailsLayout/DetailsLayout.css":
/*!****************************************************************!*\
  !*** ./pages/BenchmarkDetails/DetailsLayout/DetailsLayout.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"banner": "DetailsLayout__banner--3obxD",
	"detailsContainer": "DetailsLayout__detailsContainer--1JUFF",
	"paper": "DetailsLayout__paper--2IWRf",
	"cover": "DetailsLayout__cover--3bAYV",
	"imageContainer": "DetailsLayout__imageContainer--20r43",
	"bannerImage": "DetailsLayout__bannerImage--2r7sN",
	"overlay": "DetailsLayout__overlay--2sSRb",
	"container": "DetailsLayout__container--3feqU",
	"tabsContainer": "DetailsLayout__tabsContainer--oGgfE"
};

/***/ }),

/***/ "./pages/BenchmarkDetails/DetailsLayout/index.tsx":
/*!********************************************************!*\
  !*** ./pages/BenchmarkDetails/DetailsLayout/index.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nteract/markdown */ "@nteract/markdown");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Forms_Algorithm_AlgorithmSubmission__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Forms/Algorithm/AlgorithmSubmission */ "./components/Forms/Algorithm/AlgorithmSubmission.tsx");
/* harmony import */ var _DetailsLayout_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DetailsLayout.css */ "./pages/BenchmarkDetails/DetailsLayout/DetailsLayout.css");
/* harmony import */ var _DetailsLayout_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_DetailsLayout_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Leaderboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/Leaderboard */ "./components/Leaderboard/index.tsx");
/* harmony import */ var _components_DataFileCard___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/DataFileCard/ */ "./components/DataFileCard/index.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Logs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/Logs */ "./components/Logs/index.tsx");

















function TabContainer(props) {
  return react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    component: "div",
    style: {
      padding: 8 * 3
    },
    className: _DetailsLayout_css__WEBPACK_IMPORTED_MODULE_11___default.a.detailsContainer
  }, props.children);
}

var Details =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Details, _React$Component);

  function Details() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Details);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Details)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      value: 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (event, value) {
      _this.setState({
        value: value
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Details, [{
    key: "render",
    value: function render() {
      var value = this.state.value;
      var data = this.props.data;

      if (data) {
        /* Get the test and training data sets */
        var testDataSets = data.test_data_file !== null && data.test_ground_truth_data_file !== null ? [{
          data: data.test_data_file,
          ground_truth: data.test_ground_truth_data_file
        }] : [];
        var trainingDataSets = data.training_data_file !== null && data.training_ground_truth_data_file !== null ? [{
          data: data.training_data_file,
          ground_truth: data.training_ground_truth_data_file
        }] : [];
        return react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
          container: true,
          spacing: 3
        }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
          item: true,
          xs: 12,
          sm: 12,
          md: 12
        }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
          className: _DetailsLayout_css__WEBPACK_IMPORTED_MODULE_11___default.a.paper
        }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
          className: _DetailsLayout_css__WEBPACK_IMPORTED_MODULE_11___default.a.imageContainer
        }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("img", {
          src: data.image,
          className: _DetailsLayout_css__WEBPACK_IMPORTED_MODULE_11___default.a.bannerImage
        })), react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_14___default()(_DetailsLayout_css__WEBPACK_IMPORTED_MODULE_11___default.a.overlay, _DetailsLayout_css__WEBPACK_IMPORTED_MODULE_11___default.a.cover)
        }), react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("h2", null, data.name), react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("p", null, data.short_description))), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
          item: true,
          xs: 12
        }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], null, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Tabs"], {
          variant: "scrollable",
          value: value,
          onChange: this.handleChange,
          indicatorColor: "primary",
          className: _DetailsLayout_css__WEBPACK_IMPORTED_MODULE_11___default.a.tabsContainer
        }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Tab"], {
          label: "Description"
        }), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Tab"], {
          label: "Data"
        }), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Tab"], {
          label: "Truth"
        }), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Tab"], {
          label: "Metrics"
        }), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Tab"], {
          label: "Results"
        }), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Tab"], {
          label: "Logs"
        }), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Tab"], {
          label: "Submit"
        })), value === 0 && react__WEBPACK_IMPORTED_MODULE_9__["createElement"](TabContainer, null, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_nteract_markdown__WEBPACK_IMPORTED_MODULE_8___default.a, {
          source: data.description,
          className: _DetailsLayout_css__WEBPACK_IMPORTED_MODULE_11___default.a.container
        })), value === 1 && react__WEBPACK_IMPORTED_MODULE_9__["createElement"](TabContainer, null, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_nteract_markdown__WEBPACK_IMPORTED_MODULE_8___default.a, {
          source: data.data_description,
          className: _DetailsLayout_css__WEBPACK_IMPORTED_MODULE_11___default.a.container
        }), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_components_DataFileCard___WEBPACK_IMPORTED_MODULE_13__["default"], null)), value === 2 && react__WEBPACK_IMPORTED_MODULE_9__["createElement"](TabContainer, null, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_nteract_markdown__WEBPACK_IMPORTED_MODULE_8___default.a, {
          source: data.truth_description,
          className: _DetailsLayout_css__WEBPACK_IMPORTED_MODULE_11___default.a.container
        })), value === 3 && react__WEBPACK_IMPORTED_MODULE_9__["createElement"](TabContainer, null, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_nteract_markdown__WEBPACK_IMPORTED_MODULE_8___default.a, {
          source: data.metrics_description,
          className: _DetailsLayout_css__WEBPACK_IMPORTED_MODULE_11___default.a.container
        })), value === 4 && react__WEBPACK_IMPORTED_MODULE_9__["createElement"](TabContainer, null, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_components_Leaderboard__WEBPACK_IMPORTED_MODULE_12__["default"], {
          benchmarkID: data.id
        })), value === 5 && react__WEBPACK_IMPORTED_MODULE_9__["createElement"](TabContainer, null, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_components_Logs__WEBPACK_IMPORTED_MODULE_15__["default"], null)), value === 6 && react__WEBPACK_IMPORTED_MODULE_9__["createElement"](TabContainer, null, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_components_Forms_Algorithm_AlgorithmSubmission__WEBPACK_IMPORTED_MODULE_10__["default"], {
          benchmarkId: data.id
        })))));
      } else {
        return null;
      }
    }
  }]);

  return Details;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Details);

/***/ }),

/***/ "./pages/BenchmarkDetails/index.tsx":
/*!******************************************!*\
  !*** ./pages/BenchmarkDetails/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BenchmarkDetails; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_comicApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/comicApi */ "./services/comicApi.ts");
/* harmony import */ var _DetailsLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DetailsLayout */ "./pages/BenchmarkDetails/DetailsLayout/index.tsx");











var BenchmarkDetails =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(BenchmarkDetails, _React$Component);

  function BenchmarkDetails() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BenchmarkDetails);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(BenchmarkDetails).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(BenchmarkDetails, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_DetailsLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        data: this.props.benchmark
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _services_comicApi__WEBPACK_IMPORTED_MODULE_8__["comicApi"].benchmark(ctx.query.id);

              case 2:
                _context.t0 = _context.sent;
                return _context.abrupt("return", {
                  benchmark: _context.t0
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return BenchmarkDetails;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./services/comicApi.ts":
/*!******************************!*\
  !*** ./services/comicApi.ts ***!
  \******************************/
/*! exports provided: ComicApi, comicApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicApi", function() { return ComicApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comicApi", function() { return comicApi; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./utils/index.ts");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_6__);







var ComicApi =
/*#__PURE__*/
function () {
  function ComicApi() {
    var baseURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ComicApi);

    var token = null;

    if (typeof document !== 'undefined') {
      token = document && document.location.href.split('?token=')[1] || localStorage.getItem('comicToken') || null;
    }

    if (token && token.slice(-1) === '#') {
      token = token.slice(0, -1);
    }

    this.axios = axios__WEBPACK_IMPORTED_MODULE_4___default.a.create({
      baseURL: baseURL,
      headers: headers
    });
    this.setToken(token);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ComicApi, [{
    key: "setToken",
    value: function setToken(token) {
      if (typeof localStorage !== 'undefined') {
        if (token) {
          localStorage.setItem('comicToken', token);
        } else {
          localStorage.removeItem('comicToken');
        }
      }

      if (token) {
        this.axios.defaults.headers.Authorization = "Token ".concat(token);
      } else {
        delete this.axios.defaults.headers.Authorization;
      }
    }
  }, {
    key: "setBaseURL",
    value: function setBaseURL(baseURL) {
      this.axios.defaults.baseURL = baseURL;
    }
  }, {
    key: "me",
    value: function () {
      var _me = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.axios.defaults.headers.Authorization) {
                  _context.next = 2;
                  break;
                }

                throw Error('Trying to get /me/ user without token');

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return this.axios.get('me/');

              case 5:
                result = _context.sent;
                return _context.abrupt("return", result.data);

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                this.setToken(null);
                throw _context.t0;

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 9]]);
      }));

      function me() {
        return _me.apply(this, arguments);
      }

      return me;
    }()
    /** Register User */

  }, {
    key: "registration",
    value: function () {
      var _registration = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(details) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.axios.post('auth/register/', details);

              case 2:
                return _context2.abrupt("return", _context2.sent.data);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function registration(_x) {
        return _registration.apply(this, arguments);
      }

      return registration;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(details) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.axios.post('auth/login/', details);

              case 2:
                return _context3.abrupt("return", _context3.sent.data);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function login(_x2) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "jobs",
    value: function () {
      var _jobs = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.axios.get('jobs/');

              case 2:
                return _context4.abrupt("return", _context4.sent.data);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function jobs() {
        return _jobs.apply(this, arguments);
      }

      return jobs;
    }()
  }, {
    key: "benchmarks",
    value: function () {
      var _benchmarks = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.axios.get('benchmarks/');

              case 2:
                return _context5.abrupt("return", _context5.sent.data);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function benchmarks() {
        return _benchmarks.apply(this, arguments);
      }

      return benchmarks;
    }()
  }, {
    key: "benchmark",
    value: function () {
      var _benchmark = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(id) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.axios.get("benchmarks/".concat(id, "/"));

              case 2:
                return _context6.abrupt("return", _context6.sent.data);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function benchmark(_x3) {
        return _benchmark.apply(this, arguments);
      }

      return benchmark;
    }()
  }, {
    key: "datasets",
    value: function () {
      var _datasets = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.axios.get('datasets/');

              case 2:
                return _context7.abrupt("return", _context7.sent.data);

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function datasets() {
        return _datasets.apply(this, arguments);
      }

      return datasets;
    }()
  }, {
    key: "dataset",
    value: function () {
      var _dataset = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(id) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.axios.get("dataset/".concat(id, "/"));

              case 2:
                return _context8.abrupt("return", _context8.sent.data);

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function dataset(_x4) {
        return _dataset.apply(this, arguments);
      }

      return dataset;
    }()
  }, {
    key: "data_file",
    value: function () {
      var _data_file = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(id) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.axios.get("data_files/".concat(id, "/"));

              case 2:
                return _context9.abrupt("return", _context9.sent.data);

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function data_file(_x5) {
        return _data_file.apply(this, arguments);
      }

      return data_file;
    }()
  }, {
    key: "submissions",
    value: function () {
      var _submissions = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(filters) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.axios.get("submissions/?".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["objectToQueryParams"])(filters)));

              case 2:
                return _context10.abrupt("return", _context10.sent.data);

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function submissions(_x6) {
        return _submissions.apply(this, arguments);
      }

      return submissions;
    }()
  }, {
    key: "algorithm",
    value: function () {
      var _algorithm = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(id) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.axios.get("algorithms/".concat(id, "/"));

              case 2:
                return _context11.abrupt("return", _context11.sent.data);

              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function algorithm(_x7) {
        return _algorithm.apply(this, arguments);
      }

      return algorithm;
    }()
  }, {
    key: "benchmarkSubmission",
    value: function () {
      var _benchmarkSubmission = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(id, details) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.axios.patch("benchmarks/".concat(id, "/"), details);

              case 2:
                return _context12.abrupt("return", _context12.sent.data);

              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function benchmarkSubmission(_x8, _x9) {
        return _benchmarkSubmission.apply(this, arguments);
      }

      return benchmarkSubmission;
    }()
  }, {
    key: "datasetSubmission",
    value: function () {
      var _datasetSubmission = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13(id, details) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.axios.patch("dataset/".concat(id, "/"), details);

              case 2:
                return _context13.abrupt("return", _context13.sent.data);

              case 3:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function datasetSubmission(_x10, _x11) {
        return _datasetSubmission.apply(this, arguments);
      }

      return datasetSubmission;
    }()
  }, {
    key: "algorithmSubmission",
    value: function () {
      var _algorithmSubmission = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14(details) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.axios.post('algorithmSubmission/', details);

              case 2:
                return _context14.abrupt("return", _context14.sent.data);

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function algorithmSubmission(_x12) {
        return _algorithmSubmission.apply(this, arguments);
      }

      return algorithmSubmission;
    }()
  }]);

  return ComicApi;
}();

var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_6___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var comicApi = new ComicApi(publicRuntimeConfig.backendURL);

/***/ }),

/***/ "./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/*! exports provided: objectToQueryParams, formatDate, mapValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToQueryParams", function() { return objectToQueryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapValues", function() { return mapValues; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "../node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);






var objectToQueryParams = function objectToQueryParams() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(obj).map(function (k) {
    return "".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(obj[k]));
  }).join('&');
};
var formatDate = function formatDate(date) {
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}; // maps the values of an object to something else

var mapValues = function mapValues(obj, f) {
  return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default.a.apply(Object, [{}].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(obj).map(function (_ref) {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, k, f(v));
  }))));
};

/***/ }),

/***/ 3:
/*!************************************************!*\
  !*** multi ./pages/BenchmarkDetails/index.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pushpanjali/React_With_TS/eyra-frontend/src/pages/BenchmarkDetails/index.tsx */"./pages/BenchmarkDetails/index.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "@nteract/markdown":
/*!************************************!*\
  !*** external "@nteract/markdown" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nteract/markdown");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/entries":
/*!****************************************************!*\
  !*** external "core-js/library/fn/object/entries" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/entries");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ })

/******/ });
//# sourceMappingURL=BenchmarkDetails.js.map