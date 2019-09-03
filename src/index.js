const path = require('path');

const storage = require('./interfaces/storage/jsonStorage');

const CustomerRepository = require('./domain/repository/customerRepository');
const UserRepository = require('./domain/repository/userRepository');
const OrderRepository = require('./domain/repository/orderRepository');
const InvoiceRepository = require('./domain/repository/invoiceRepository');

const createUser = require('./domain/service/user/createUser');
const createCustomer = require('./domain/service/customer/createCustomer');
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

  await createUser(
    'fredrik palmquist',
    'zetta konsult',
    'fiddep@telia.com',
    '0709394595',
    'Nätsnäcksgränd 8',
    'Malmö',
    21631,
    { invoiceStrategy: 'linear-increment' },
    { userRepository }
  );
  await createCustomer('itresurs', 'kungsgatan 33', '24230', 'hörby', {
    customerRepository,
  });

  const invoice = await createInvoice(3, 1, 1, {
    customerRepository,
    userRepository,
    orderRepository,
    invoiceRepository,
  });

  presenter.render(invoice);
}

run();
