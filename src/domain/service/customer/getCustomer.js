const Customer = require('../../entity/customer.js');

function getCustomer(id, { customerRepository }) {
  return customerRepository.get(id);
}

module.exports = getCustomer;
