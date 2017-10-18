/**
 * @file If IsObject(value) is false, throw a TypeError exception.
 * @version 2.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module assert-is-object-x
 */

'use strict';

var safeToString = require('to-string-symbols-supported-x');
var isPrimitive = require('is-primitive');

/**
   * Tests `value` to see if it is an object, throws a `TypeError` if it is
   * not. Otherwise returns the `value`.
   *
   * @param {*} value - The argument to be tested.
   * @throws {TypeError} Throws if `value` is not an object.
   * @returns {*} Returns `value` if it is an object.
   * @example
   * var assertIsObject = require('assert-is-object-x');
   * var primitive = true;
   * var mySymbol = Symbol('mySymbol');
   * var symObj = Object(mySymbol);
   * var object = {};
   * function fn () {}
   *
   * assertIsObject(primitive); // TypeError 'true is not an object'
   * assertIsObject(mySymbol); // TypeError 'Symbol(mySymbol) is not an object'
   * assertIsObject(symObj); // Returns symObj.
   * assertIsObject(object); // Returns object.
   * assertIsObject(fn); // Returns fn.
   */
module.exports = function assertIsObject(value) {
  if (isPrimitive(value)) {
    throw new TypeError(safeToString(value) + ' is not an object');
  }

  return value;
};
