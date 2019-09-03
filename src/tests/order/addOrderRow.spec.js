const Order = require('../../domain/entity/order');
const OrderRow = require('../../domain/entity/orderRow');

const OrderRepository = require('../../domain/repository/orderRepository');
const addOrderRows = require('../../domain/service/order/addOrderRows');

const mockOrderRepository = new OrderRepository();

describe('addInvoiceRow', () => {
  it('create a invoice', async () => {
    const persistedOrder = new Order(1, []);
    mockOrderRepository.get = jest.fn(() => persistedOrder);
    mockOrderRepository.persist = jest.fn(() => persistedOrder);

    const result = await addOrderRows(1, [new OrderRow()], {
      orderRepository: mockOrderRepository,
    });

    expect(mockOrderRepository.get).toHaveBeenCalledWith(1);
    expect(mockOrderRepository.persist).toHaveBeenCalledWith(persistedOrder);
    expect(result.rows.length).toEqual(1);
    expect(result.rows).toEqual([
      {
        description: undefined,
        price: undefined,
        tax: undefined,
        unit: undefined,
      },
    ]);
  });
});
