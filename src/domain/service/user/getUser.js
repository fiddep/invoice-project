const User = require('../../entity/customer.js');

function getUser(id, { userRepository }) {
  return userRepository.get(id);
}

module.exports = getUser;
