const hasSymbolSupport = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const ifSymbolSupportIt = hasSymbolSupport ? it : xit;
let assertIsObject;

if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');

  if (typeof JSON === 'undefined') {
    JSON = {};
  }

  require('json3').runInContext(null, JSON);
  require('es6-shim');
  const es7 = require('es7-shim');
  Object.keys(es7).forEach(function(key) {
    const obj = es7[key];

    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  assertIsObject = require('../../index.js');
} else {
  assertIsObject = returnExports;
}

describe('assertIsObject', function() {
  it('primitives should throw a TypeError', function() {
    const block = function(value) {
      try {
        assertIsObject(value);

        return false;
      } catch (e) {
        expect(e).toStrictEqual(jasmine.any(TypeError));
        expect(e.message).toBe(`${String(value)} is not an object`);
      }

      return true;
    };

    const values = [undefined, null, 1, true, ''];
    const expected = values.map(function() {
      return true;
    });
    const actual = values.map(block);
    expect(actual).toStrictEqual(expected);
  });

  ifSymbolSupportIt('Symbol literals should throw a TypeError', function() {
    const block = function(value) {
      try {
        assertIsObject(value);

        return false;
      } catch (e) {
        expect(e).toStrictEqual(jasmine.any(TypeError));
        expect(e.message).toBe('Symbol(mySymbol) is not an object');
      }

      return true;
    };

    const sym = Symbol('mySymbol');
    const values = [sym];
    const expected = values.map(function() {
      return true;
    });
    const actual = values.map(block);
    expect(actual).toStrictEqual(expected);
  });

  ifSymbolSupportIt('Symbol objects should return the object', function() {
    const sym = Object(Symbol('mySymbol'));
    expect(assertIsObject(sym)).toStrictEqual(sym);
  });

  it('should return the object', function() {
    const block = function(value) {
      try {
        return assertIsObject(value);
      } catch (ignore) {}

      return false;
    };

    const values = [function() {}, Array, block, assertIsObject, [], {}, /r/, new Date()];
    const expected = values.map(function(x) {
      return x;
    });
    const actual = values.map(block);
    expect(actual).toStrictEqual(expected);
  });
});
