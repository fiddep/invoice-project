module.exports = function(dt) {
  dt = dt || { getTime: () => Date.now() };
  return dt.getTime();
};
