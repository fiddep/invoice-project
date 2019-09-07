const Order = require('../../entity/order.js');

function createOrder(
  rows,
  userReference,
  customerReference,
  { orderRepository }
) {
  return orderRepository.persist(
    Order.of({ rows, userReference, customerReference })
  );
}

module.exports = createOrder;
