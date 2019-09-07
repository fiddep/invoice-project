module.exports = function(dt) {
  dt = dt || new Date();
  return dt.toISOString().split('T')[0];
};
