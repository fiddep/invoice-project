const Order = require('../../domain/entity/order');
const OrderRepository = require('../../domain/repository/OrderRepository');
const getOrder = require('../../domain/service/order/getOrder');

const mockOrderRepository = new OrderRepository();

describe('getCustomer', () => {
  it('should resolve with the corresponding persisted user entity', async () => {
    const correspondingOrder = new Order();
    mockOrderRepository.get = jest.fn(() => correspondingOrder);

    const order = await getOrder(123, {
      orderRepository: mockOrderRepository,
    });

    expect(mockOrderRepository.get).toHaveBeenCalledWith(123);
    expect(order).toEqual(correspondingOrder);
  });
});
