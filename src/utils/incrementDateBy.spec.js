const incrementDateBy = require('./incrementDateBy');

describe('incrementDateBy()', () => {
  it('Increments date by the given number.', () => {
    const date = Date.UTC(2017, 0, 1);
    const expected = Date.UTC(2017, 0, 3);

    const result = incrementDateBy(date, 2);

    expect(result).toBe(expected);
  });

  it('increment date over month', () => {
    const date = Date.UTC(2019, 3, 23);
    const expected = Date.UTC(2019, 4, 23);

    const result = incrementDateBy(date, 30);

    expect(result).toBe(expected);
  });
});
