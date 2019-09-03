const Order = require('../../entity/order.js');

async function addOrderRows(id, rows, { orderRepository }) {
  const orderData = await orderRepository.get(id);
  const order = Order.of(orderData);

  rows.forEach(row => order.addRow(row));

  return orderRepository.persist(order);
}

module.exports = addOrderRows;
