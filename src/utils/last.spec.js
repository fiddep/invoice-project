const last = require('./last');

describe('last', () => {
  it('returns last element in array', () => {
    const array = [2, 1];

    const res = last(array);

    expect(res).toBe(1);
  });
});
