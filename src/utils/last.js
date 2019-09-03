function last(array) {
  if (!array || !array.length) {
    return undefined;
  }
  return array[array.length - 1];
}

module.exports = last;
