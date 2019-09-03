const createInvoice = require('../../domain/service/invoice/createInvoice');

const CustomerRepository = require('../../domain/repository/CustomerRepository');
const OrderRepository = require('../../domain/repository/OrderRepository');
const UserRepository = require('../../domain/repository/UserRepository');
const InvoiceRepository = require('../../domain/repository/InvoiceRepository');

const mockOrderRepository = new OrderRepository();
const mockUserRepository = new UserRepository();
const mockCustomerRepository = new CustomerRepository();
const mockInvoiceRepository = new InvoiceRepository();

describe('createInvoice', () => {
  it('create invoice from all parts', async () => {
    Date.now = jest.fn(() => 1482363367071);
    const mockId = 0;
    mockOrderRepository.get = jest.fn(id => ({}));
    mockUserRepository.get = jest.fn(id => ({
      settings: { invoiceStrategy: 'linear-increment' },
    }));
    mockCustomerRepository.get = jest.fn(id => ({}));
    mockInvoiceRepository.persist = jest.fn(obj => obj);
    mockInvoiceRepository.last = jest.fn(() => ({ id: 2 }));

    const invoice = await createInvoice(mockId, mockId, mockId, {
      orderRepository: mockOrderRepository,
      userRepository: mockUserRepository,
      customerRepository: mockCustomerRepository,
      invoiceRepository: mockInvoiceRepository,
    });

    expect(mockInvoiceRepository.persist).toHaveBeenCalled();
    expect(invoice).toMatchSnapshot();
  });
});
