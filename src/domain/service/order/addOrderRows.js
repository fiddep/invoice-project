const Order = require('../../entity/order.js');

/**
 * @typedef {import('./../../entity/orderRow')} OrderRow
 * @typedef {import('./../../entity/order')} Order
 *
 * @param {number} id
 * @param {OrderRow} rows
 * @param {Object} repositories
 *
 * @returns {Order}
 */
async function addOrderRows(id, rows, { orderRepository }) {
  const orderData = await orderRepository.get(id);
  const order = Order.of(orderData);

  rows.forEach(row => order.addRow(row));

  return orderRepository.persist(order);
}

module.exports = addOrderRows;
