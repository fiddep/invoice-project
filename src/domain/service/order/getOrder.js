function getOrder(id, { orderRepository }) {
  return orderRepository.get(id);
}

module.exports = getOrder;
