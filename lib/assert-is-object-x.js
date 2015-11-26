(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.returnExports = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/assert-is-object-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/assert-is-object-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/assert-is-object-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/assert-is-object-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/assert-is-object-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/assert-is-object-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/assert-is-object-x" title="npm version">
 * <img src="https://badge.fury.io/js/assert-is-object-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * If IsObject(value) is false, throw a TypeError exception.
 * @version 1.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module assert-is-object-x
 */

/*jslint maxlen:80, es6:true, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:true, plusplus:true, maxparams:3, maxdepth:2,
  maxstatements:12, maxcomplexity:6 */

/*global require, module */

;(function () {
  'use strict';

  var isPrimitive = require('is-primitive');
  /**
   * Tests `value` to see if it is an object, throws a `TypeError` if it is
   * not. Otherwise returns the `value`.
   *
   * @param {*} value The argument to be tested.
   * @throws {TypeError} Throws if `value` is not an object.
   * @return {*} Returns `value` if it is an object.
   * @example
   * var assertIsObject = require('assert-is-object-x');
   * var primitive = true;
   * var object = {};
   * function fn () {}
   *
   * assertIsObject(primitive); // TypeError 'true is not an object'.
   * assertIsObject(object); // Returns object.
   * assertIsObject(fn); // Returns fn.
   */
  module.exports = function (value) {
    if (isPrimitive(value)) {
      throw new TypeError(String(value) + ' is not an object');
    }
    return value;
  };
}());

},{"is-primitive":2}],2:[function(require,module,exports){
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

// see http://jsperf.com/testing-value-is-primitive/7
module.exports = function isPrimitive(value) {
  return value == null || (typeof value !== 'function' && typeof value !== 'object');
};

},{}]},{},[1])(1)
});