const getDateString = require('./getDateString');

describe('getDateString', () => {
  it('returns date part of a iso string', () => {
    const date = new Date(2019, 9, 10);

    const result = getDateString(date);

    expect(result).toEqual('2019-10-09');
  });
});
