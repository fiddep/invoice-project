const invoiceId = require('./invoiceId');

describe('invoiceId', () => {
  it('create a invoice', () => {
    const generateId = new invoiceId('year-increment');

    const result = generateId.generate('2019-1000', { getYear: () => 2019 });

    expect(result).toEqual('2019-1001');
  });

  it('increments year and reset id if previous id was in previous year', () => {
    const generateId = new invoiceId('year-increment');

    const result = generateId.generate('2018-1000', { getYear: () => 2019 });

    expect(result).toEqual('2019-1000');
  });

  it('linear-increment always increase by 1', () => {
    const generateId = new invoiceId('linear-increment');

    const result = generateId.generate('1000', { getYear: () => 2019 });

    expect(result).toEqual('1001');
  });

  it('uses linear-increment as default', () => {
    const generateId = new invoiceId();

    const result = generateId.generate('1000', { getYear: () => 2019 });

    expect(result).toEqual('1001');
  });
});
