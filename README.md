<a
  href="https://travis-ci.org/Xotic750/assert-is-object-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/assert-is-object-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/assert-is-object-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/assert-is-object-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/assert-is-object-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/assert-is-object-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/assert-is-object-x"
  title="npm version">
<img src="https://badge.fury.io/js/assert-is-object-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/assert-is-object-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/assert-is-object-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/assert-is-object-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/assert-is-object-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/assert-is-object-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/assert-is-object-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_assert-is-object-x"></a>

## assert-is-object-x

If IsObject(value) is false, throw a TypeError exception.

<a name="exp_module_assert-is-object-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>\*</code> ⏏

Tests `value` to see if it is an object, throws a `TypeError` if it is
not. Otherwise returns the `value`.

**Kind**: Exported function  
**Returns**: <code>\*</code> - Returns `value` if it is an object.  
**Throws**:

- <code>TypeError</code> Throws if `value` is not an object.

| Param | Type            | Description                |
| ----- | --------------- | -------------------------- |
| value | <code>\*</code> | The argument to be tested. |

**Example**

```js
import assertIsObject from 'assert-is-object-x';

const primitive = true;
const mySymbol = Symbol('mySymbol');
const symObj = Object(mySymbol);
const object = {};
const fn = function fn() {};

assertIsObject(primitive); // TypeError 'true is not an object'
assertIsObject(mySymbol); // TypeError 'Symbol(mySymbol) is not an object'
assertIsObject(symObj); // Returns symObj.
assertIsObject(object); // Returns object.
assertIsObject(fn); // Returns fn.
```
