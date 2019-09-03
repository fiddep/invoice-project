/**
 * From underscore
 * @param {any} fn
 */
function isFunction(fn) {
  return !!(fn && fn.constructor && fn.call && fn.apply);
}

module.exports = isFunction;
