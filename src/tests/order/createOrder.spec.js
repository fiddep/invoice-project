const Order = require('../../domain/entity/order');
const OrderRepository = require('../../domain/repository/orderRepository');
const createOrder = require('../../domain/service/order/createOrder');

const mockOrderRepository = new OrderRepository();

describe('createOrder', () => {
  it('create a order', async () => {
    const rows = [];
    const userReference = 'user reference';
    const customerReference = 'customer contact';
    const persistedOrder = new Order(1, rows, userReference, customerReference);
    mockOrderRepository.persist = jest.fn(() => persistedOrder);

    const result = await createOrder(rows, userReference, customerReference, {
      orderRepository: mockOrderRepository,
    });

    expect(result).toEqual(persistedOrder);
  });
});
