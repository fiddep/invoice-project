const Order = require('../../domain/entity/order');
const OrderRepository = require('../../domain/repository/orderRepository');
const createOrder = require('../../domain/service/order/createOrder');

const mockOrderRepository = new OrderRepository();

describe('createOrder', () => {
  // TODO
  it.skip('create a order', async () => {
    // userReference customerReference, rows
    const persistedOrder = new Order(1, []);
    mockOrderRepository.persist = jest.fn(() => persistedOrder);

    const result = await createOrder(1, [], {
      orderRepository: mockOrderRepository,
    });

    expect(result).toEqual(persistedOrder);
  });
});
