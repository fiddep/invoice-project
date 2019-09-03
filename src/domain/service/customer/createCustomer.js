const Customer = require('../../entity/customer.js');

function createCustomer(name, address, zipcode, city, { customerRepository }) {
  const customer = new Customer(null, name, address, zipcode, city);
  return customerRepository.persist(customer);
}

module.exports = createCustomer;
