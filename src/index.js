const path = require('path');

const storage = require('./interfaces/storage/jsonStorage');

const CustomerRepository = require('./domain/repository/customerRepository');
const UserRepository = require('./domain/repository/userRepository');
const OrderRepository = require('./domain/repository/orderRepository');
const InvoiceRepository = require('./domain/repository/invoiceRepository');

const createInvoice = require('./domain/service/invoice/createInvoice');

const presenter = require('./drivers/cli');

const customersData = path.resolve(__dirname, '../data/customers.json');
const usersData = path.resolve(__dirname, '../data/user.json');
const ordersData = path.resolve(__dirname, '../data/order.json');
const invoicesData = path.resolve(__dirname, '../data/invoice.json');

async function run() {
  const customerStorage = await storage.of(customersData);
  const userStorage = await storage.of(usersData);
  const orderStorage = await storage.of(ordersData);
  const invoiceStorage = await storage.of(invoicesData);

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
