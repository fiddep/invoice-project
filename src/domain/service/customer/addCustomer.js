const Customer = require('../../entity/customer.js');

function addCustomer(name, address, zipcode, city, { customerRepository }) {
  const user = new Customer(null, name, address, zipcode, city);
  return customerRepository.persist(user);
}

module.exports = addCustomer;
