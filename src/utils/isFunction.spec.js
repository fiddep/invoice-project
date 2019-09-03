const isFunction = require('./isFunction');

describe('isFunction', () => {
  it('returns false for object', () => {
    const test = {};

    const result = isFunction(test);

    expect(result).toBe(false);
  });

  it('returns true for function', () => {
    const test = () => {};

    const result = isFunction(test);

    expect(result).toBe(true);
  });
});
