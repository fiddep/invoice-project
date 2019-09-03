const Order = require('../../entity/order.js');

function createOrder(generateId, rows, { orderRepository }) {
  const order = new Order(undefined, rows);
  return orderRepository.persist(order);
}

module.exports = createOrder;
