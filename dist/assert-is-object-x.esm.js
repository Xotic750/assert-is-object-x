import safeToString from 'to-string-symbols-supported-x';
import isPrimitive from 'is-primitive';
/**
 * Tests `value` to see if it is an object, throws a `TypeError` if it is
 * not. Otherwise returns the `value`.
 *
 * @param {*} value - The argument to be tested.
 * @param {string} [message] - An alternative user message.
 * @throws {TypeError} Throws if `value` is not an object.
 * @returns {*} Returns `value` if it is an object.
 */

var assertIsObject = function assertIsObject(value, message) {
  if (isPrimitive(value)) {
    var msg = arguments.length > 1 ? safeToString(message) : "".concat(safeToString(value), " is not an object");
    throw new TypeError(msg);
  }

  return value;
};

export default assertIsObject;

//# sourceMappingURL=assert-is-object-x.esm.js.map