const Customer = require('../../domain/entity/customer');
const CustomerRepository = require('../../domain/repository/CustomerRepository');
const inmemoryStorage = require('../../interfaces/storage/inmemoryStorage');
const addCustomer = require('../../domain/service/customer/addCustomer');

const storage = new inmemoryStorage();
const mockCustomerRepository = new CustomerRepository(storage);

describe('addCustomer', () => {
  it('add a customer', async () => {
    const persistedCustomer = new Customer(
      1,
      'new customer',
      'gata',
      '123',
      'stad'
    );

    const result = await addCustomer('new customer', 'gata', '123', 'stad', {
      customerRepository: mockCustomerRepository,
    });

    expect(result).toEqual(persistedCustomer);
  });
});
