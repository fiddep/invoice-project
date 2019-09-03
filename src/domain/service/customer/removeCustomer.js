async function removeCustomer(id, { customerRepository }) {
  return customerRepository.remove(id);
}

module.exports = removeCustomer;
