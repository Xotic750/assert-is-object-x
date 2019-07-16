import noop from 'lodash/noop';
import assertIsObject from '../src/assert-is-object-x';

const hasSymbolSupport = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const ifSymbolSupportIt = hasSymbolSupport ? it : xit;

describe('assertIsObject', function() {
  it('primitives should throw a TypeError', function() {
    expect.assertions(11);
    const block = function(value) {
      try {
        assertIsObject(value);

        return false;
      } catch (e) {
        expect(e).toStrictEqual(expect.any(TypeError));
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
    expect.assertions(3);
    const block = function(value) {
      try {
        assertIsObject(value);

        return false;
      } catch (e) {
        expect(e).toStrictEqual(expect.any(TypeError));
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
    expect.assertions(1);

    const sym = Object(Symbol('mySymbol'));
    expect(assertIsObject(sym)).toStrictEqual(sym);
  });

  it('should return the object', function() {
    expect.assertions(1);
    const block = function(value) {
      try {
        return assertIsObject(value);
      } catch (ignore) {
        // empty
      }

      return false;
    };

    const values = [noop, Array, block, assertIsObject, [], {}, /r/, new Date()];
    const expected = values.map(function(x) {
      return x;
    });
    const actual = values.map(block);
    expect(actual).toStrictEqual(expected);
  });
});
