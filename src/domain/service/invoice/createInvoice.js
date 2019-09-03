const Invoice = require('../../entity/Invoice.js');
const InvoiceId = require('../../entity/invoiceId');
const getTimestamp = require('../../../utils/getTimestamp');

async function createInvoice(
  orderId,
  userId,
  customerId,
  { orderRepository, userRepository, customerRepository, invoiceRepository }
) {
  const order = await orderRepository.get(orderId);
  const user = await userRepository.get(userId);
  const customer = await customerRepository.get(customerId);
  const previousInvoice = await invoiceRepository.last();

  const invoiceId = new InvoiceId(user.settings.invoiceStrategy);

  const invoice = new Invoice(
    null,
    invoiceId.generate(previousInvoice.id),
    order,
    customer,
    user,
    getTimestamp()
  );

  return invoiceRepository.persist(invoice);
}

module.exports = createInvoice;
