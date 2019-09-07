const setupRepositories = require('./setupRepositories');

const createUser = require('./domain/service/user/createUser');
const createCustomer = require('./domain/service/customer/createCustomer');
const createInvoice = require('./domain/service/invoice/createInvoice');
const createOrder = require('./domain/service/order/createOrder');

const presenter = require('./drivers/cli');

async function run() {
  const respositories = await setupRepositories();

  const user = await createUser(
    'fredrik palmquist',
    'zetta konsult',
    'fiddep@telia.com',
    '0709394595',
    'Nätsnäcksgränd 8',
    'Malmö',
    21631,
    { invoiceStrategy: 'linear-increment' },
    respositories
  );
  const customer = await createCustomer(
    'itresurs',
    'kungsgatan 33',
    '24230',
    'hörby',
    respositories
  );

  const invoice = await createInvoice(3, user.id, customer.id, respositories);

  presenter.render(invoice);
}

run();
