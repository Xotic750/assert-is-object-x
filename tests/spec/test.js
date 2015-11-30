/*jslint maxlen:80, es6:true, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:true, plusplus:true, maxparams:3, maxdepth:1,
  maxstatements:11, maxcomplexity:2 */

/*global expect, module, jasmine, require, describe, xit, it, returnExports */

(function () {
  'use strict';

  var hasSymbolCtr = typeof Symbol === 'function',
    ifSymbolCtrIt = hasSymbolCtr ? it : xit,
    assertIsObject;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
    assertIsObject = require('../../index.js');
  } else {
    assertIsObject = returnExports;
  }

  describe('assertIsObject', function () {
    it('primitives should throw a TypeError', function () {
      function block(value) {
        try {
          assertIsObject(value);
          return false;
        } catch (e) {
          expect(e).toEqual(jasmine.any(TypeError));
          expect(e.message).toBe(String(value) + ' is not an object');
        }
        return true;
      }
      var values = [undefined, null, 1, true, ''],
        expected = values.map(function () {
          return true;
        }),
        actual = values.map(block);
      expect(actual).toEqual(expected);
    });

    ifSymbolCtrIt('Symbols should throw a TypeError', function () {
      function block(value) {
        try {
          assertIsObject(value);
          return false;
        } catch (e) {
          expect(e).toEqual(jasmine.any(TypeError));
          expect(e.message).toBe('#<Symbol> is not an object');
        }
        return true;
      }
      var values = [Symbol('mySymbol')],
        expected = values.map(function () {
          return true;
        }),
        actual = values.map(block);
      expect(actual).toEqual(expected);
    });

    it('should return the object', function () {
      function block(value) {
        try {
          return assertIsObject(value);
        } catch (ignore) {}
        return false;
      }
      var values = [
          function () {},
          Array,
          block,
          assertIsObject,
          [],
          {},
          /r/,
          new Date()
        ],
        expected = values.map(function (x) {
          return x;
        }),
        actual = values.map(block);
      expect(actual).toEqual(expected);
    });
  });
}());
