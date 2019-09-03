const OrderRow = require('./orderRow');

describe('create order row', () => {
  it('create a row', () => {
    const row = new OrderRow(1, 'hej', 5, 0.2);

    expect(row).toEqual({ unit: 1, description: 'hej', price: 5, tax: 0.2 });
  });

  it('calculate sum of row', () => {
    const row = new OrderRow(1, 'hej', 5, 0);

    const result = row.calculateSum();

    expect(result).toEqual(5);
  });

  it('calculate sum of row with tax', () => {
    const row = new OrderRow(1, 'hej', 10, 0.5);

    const result = row.calculateSum();

    expect(result).toEqual(15);
  });

  it('calculate total tax', () => {
    const row = new OrderRow(1, 'hej', 10, 0.5);

    const result = row.calculateTax();

    expect(result).toEqual(5);
  });

  it('returns tax label', () => {
    const row = new OrderRow(1, 'hej', 10, 0.5);

    const result = row.getTaxLabel();

    expect(result).toEqual('50%');
  });

  it('returns the net of the row', () => {
    const row = new OrderRow(2, 'hej', 10, 0.5);

    const result = row.calculateNet();

    expect(result).toEqual(20);
  });
});
