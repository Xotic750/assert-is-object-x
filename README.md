<a name="module_assert-is-object-x"></a>
## assert-is-object-x
<a href="https://travis-ci.org/Xotic750/assert-is-object-x"
title="Travis status">
<img
src="https://travis-ci.org/Xotic750/assert-is-object-x.svg?branch=master"
alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/assert-is-object-x"
title="Dependency status">
<img src="https://david-dm.org/Xotic750/assert-is-object-x.svg"
alt="Dependency status" height="18"/>
</a>
<a
href="https://david-dm.org/Xotic750/assert-is-object-x#info=devDependencies"
title="devDependency status">
<img src="https://david-dm.org/Xotic750/assert-is-object-x/dev-status.svg"
alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/assert-is-object-x" title="npm version">
<img src="https://badge.fury.io/js/assert-is-object-x.svg"
alt="npm version" height="18">
</a>

If IsObject(value) is false, throw a TypeError exception.

<h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
`es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
methods that can be faithfully emulated with a legacy JavaScript engine.

`es5-sham.js` monkey-patches other ES5 methods as closely as possible.
For these methods, as closely as possible to ES5 is not very close.
Many of these shams are intended only to allow code to be written to ES5
without causing run-time errors in older engines. In many cases,
this means that these shams cause many ES5 methods to silently fail.
Decide carefully whether this is what you want. Note: es5-sham.js requires
es5-shim.js to be able to work properly.

`json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.

`es6.shim.js` provides compatibility shims so that legacy JavaScript engines
behave as closely as possible to ECMAScript 6 (Harmony).

**Version**: 1.0.5  
**Author:** Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_assert-is-object-x--module.exports"></a>
### `module.exports(value)` ⇒ <code>\*</code> ⏏
Tests `value` to see if it is an object, throws a `TypeError` if it is
not. Otherwise returns the `value`.

**Kind**: Exported function  
**Returns**: <code>\*</code> - Returns `value` if it is an object.  
**Throws**:

- <code>TypeError</code> Throws if `value` is not an object.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The argument to be tested. |

**Example**  
```js
var assertIsObject = require('assert-is-object-x');
var primitive = true;
var mySymbol = Symbol('mySymbol');
var symObj = Object(mySymbol);
var object = {};
function fn () {}

assertIsObject(primitive); // TypeError 'true is not an object'
assertIsObject(mySymbol); // TypeError 'Symbol(mySymbol) is not an object'
assertIsObject(symObj); // Returns symObj.
assertIsObject(object); // Returns object.
assertIsObject(fn); // Returns fn.
```
