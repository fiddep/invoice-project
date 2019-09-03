const User = require('../../entity/user.js');

function createUser(
  name,
  company,
  email,
  mobile,
  address,
  city,
  zip,
  settings,
  { userRepository }
) {
  const user = new User(
    null,
    name,
    company,
    email,
    mobile,
    address,
    city,
    zip,
    settings
  );
  return userRepository.persist(user);
}

module.exports = createUser;
