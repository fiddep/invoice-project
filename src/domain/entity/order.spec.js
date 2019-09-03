const OrderRow = require('./orderRow');
const Order = require('./order');

describe('OrderRow', () => {
  it('create a Order', () => {
    const row = new OrderRow(1, 'hej', 5, 0.2);
    const i = new Order(2, [row]);

    expect(i).toEqual({
      id: 2,
      rows: [
        {
          description: 'hej',
          price: 5,
          tax: 0.2,
          unit: 1,
        },
      ],
    });
  });

  it('returns the sum of the Order', () => {
    const row = new OrderRow(1, 'hej', 10, 0.5);
    const i = new Order(2, [row, row]);

    const result = i.calculateSum();

    expect(result).toEqual(30);
  });

  it('returns the total tax of the Order', () => {
    const row = new OrderRow(1, 'hej', 10, 0.5);
    const i = new Order(2, [row, row]);

    const result = i.calculateTax();

    expect(result).toEqual(10);
  });

  it('returns map of all taxes', () => {
    const row = new OrderRow(1, 'hej', 10, 0.5);
    const row2 = new OrderRow(1, 'hej', 10, 0.2);
    const i = new Order(2, [row, row2]);

    const result = i.calculateTaxMap();

    expect(result).toEqual({ '50%': 5, '20%': 2 });
  });

  it('calculate net of Order', () => {
    const row = new OrderRow(2, 'hej', 10, 0.5);
    const row2 = new OrderRow(1, 'hej', 10, 0.2);
    const i = new Order(2, [row, row2]);

    const result = i.calculateNet();

    expect(result).toEqual(30);
  });

  it('add Order row', () => {
    const i = new Order(1, []);

    const result = i.addRow({ price: 5 });

    expect(result).toEqual({
      id: 1,
      invoiceId: 2,
      invoiceId: undefined,
      rows: [{ price: 5 }],
    });
  });

  it('creates a Order from obj', () => {
    const o = { id: 4, rows: [{ price: 5 }] };

    const result = Order.of(o);

    expect(result).toEqual({
      id: 4,
      invoiceId: undefined,
      rows: [{ price: 5 }],
    });
  });

  it('attaches customer and user reference to order', () => {
    const o = {
      id: 4,
      rows: [{ price: 5 }],
      userReference: 'user reference',
      customerReference: 'customer reference',
    };

    const result = Order.of(o);

    expect(result).toEqual({
      id: 4,
      rows: [{ price: 5 }],
      userReference: 'user reference',
      customerReference: 'customer reference',
    });
  });
});
