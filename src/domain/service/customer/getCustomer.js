const Customer = require('../../entity/customer.js');

function addCustomer(id, { customerRepository }) {
  return customerRepository.get(id);
}

module.exports = addCustomer;
