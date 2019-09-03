const Customer = require('../../domain/entity/customer');
const CustomerRepository = require('../../domain/repository/CustomerRepository');
const inmemoryStorage = require('../../interfaces/storage/inmemoryStorage');
const createCustomer = require('../../domain/service/customer/createCustomer');

const storage = new inmemoryStorage();
const mockCustomerRepository = new CustomerRepository(storage);

describe('createCustomer', () => {
  it('add a customer', async () => {
    const persistedCustomer = new Customer(
      1,
      'new customer',
      'gata',
      '123',
      'stad'
    );

    const result = await createCustomer('new customer', 'gata', '123', 'stad', {
      customerRepository: mockCustomerRepository,
    });

    expect(result).toEqual(persistedCustomer);
  });
});
