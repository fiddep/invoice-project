const getTimestamp = require('./getTimestamp');

describe('getTimestamp', () => {
  it('returns timestamp of provided Date', () => {
    const dt = new Date(2019, 6, 5);

    const res = getTimestamp(dt);

    expect(res).toEqual(1562277600000);
  });
});
