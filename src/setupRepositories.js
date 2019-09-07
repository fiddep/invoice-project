const path = require('path');

const storage = require('./interfaces/storage/jsonStorage');

const CustomerRepository = require('./domain/repository/customerRepository');
const UserRepository = require('./domain/repository/userRepository');
const OrderRepository = require('./domain/repository/orderRepository');
const InvoiceRepository = require('./domain/repository/invoiceRepository');

const dataPath = file => path.resolve(__dirname, `../data/${file}.json`);

const setupRepositories = async () => {
  const customerStorage = await storage.of(dataPath('customers'));
  const userStorage = await storage.of(dataPath('user'));
  const orderStorage = await storage.of(dataPath('order'));
  const invoiceStorage = await storage.of(dataPath('invoice'));

  const customerRepository = new CustomerRepository(customerStorage);
  const userRepository = new UserRepository(userStorage);
  const orderRepository = new OrderRepository(orderStorage);
  const invoiceRepository = new InvoiceRepository(invoiceStorage);

  return {
    customerRepository,
    userRepository,
    orderRepository,
    invoiceRepository,
  };
};

module.exports = setupRepositories;
