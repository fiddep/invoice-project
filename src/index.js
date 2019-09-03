const path = require('path');

const storage = require('./interfaces/storage/jsonStorage');

const CustomerRepository = require('./domain/repository/customerRepository');
const UserRepository = require('./domain/repository/userRepository');
const OrderRepository = require('./domain/repository/orderRepository');
const InvoiceRepository = require('./domain/repository/invoiceRepository');

const createInvoice = require('./domain/service/invoice/createInvoice');

const presenter = require('./drivers/cli');

const dataPath = file => path.resolve(__dirname, `../data/${file}.json`);

async function run() {
  const customerStorage = await storage.of(dataPath('customers'));
  const userStorage = await storage.of(dataPath('user'));
  const orderStorage = await storage.of(dataPath('order'));
  const invoiceStorage = await storage.of(dataPath('invoice'));

  const customerRepository = new CustomerRepository(customerStorage);
  const userRepository = new UserRepository(userStorage);
  const orderRepository = new OrderRepository(orderStorage);
  const invoiceRepository = new InvoiceRepository(invoiceStorage);

  const invoice = await createInvoice(1, 1, 1, {
    customerRepository,
    userRepository,
    orderRepository,
    invoiceRepository,
  });

  presenter.render(invoice);
}

run();
