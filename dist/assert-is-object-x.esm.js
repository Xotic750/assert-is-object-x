import safeToString from 'to-string-symbols-supported-x';
import isPrimitive from 'is-primitive';
/**
 * Tests `value` to see if it is an object, throws a `TypeError` if it is
 * not. Otherwise returns the `value`.
 *
 * @param {*} value - The argument to be tested.
 * @throws {TypeError} Throws if `value` is not an object.
 * @returns {*} Returns `value` if it is an object.
 */

export default function assertIsObject(value) {
  if (isPrimitive(value)) {
    throw new TypeError("".concat(safeToString(value), " is not an object"));
  }

  return value;
}

//# sourceMappingURL=assert-is-object-x.esm.js.map