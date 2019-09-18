module.exports = function incrementDateBy(date, value) {
  let d = new Date(date);
  d.setUTCDate(d.getUTCDate() + value);
  return d.getTime();
};
