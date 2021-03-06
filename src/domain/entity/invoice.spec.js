const Invoice = require('./invoice');

describe('Invoice', () => {
  it('create a invoice', () => {
    const invoiceId = 1;
    const order = { rows: [] };
    const customer = { id: 1 };
    const user = { id: 2 };

    const result = new Invoice(null, invoiceId, order, customer, user);

    expect(result).toEqual({
      customer: { id: 1 },
      invoiceId: 1,
      id: null,
      order: { rows: [] },
      user: { id: 2 },
    });
  });

  it('create a invoice with createdAt', () => {
    const invoiceId = 1;
    const order = { rows: [] };
    const customer = { id: 1 };
    const user = { id: 2 };

    const result = new Invoice(null, invoiceId, order, customer, user, 123789);

    expect(result).toEqual({
      customer: { id: 1 },
      invoiceId: 1,
      id: null,
      order: { rows: [] },
      user: { id: 2 },
      createdAt: 123789,
    });
  });

  it('get invoice due date', () => {
    const invoiceId = 1;
    const order = { rows: [] };
    const customer = { id: 1 };
    const user = { id: 2 };
    const date = Date.UTC(2019, 3, 23);
    const expected = Date.UTC(2019, 4, 23);
    const invoice = new Invoice(
      null,
      invoiceId,
      order,
      customer,
      user,
      date,
      30
    );

    const result = invoice.calculateDueDate();

    expect(result).toEqual(expected);
  });
});
