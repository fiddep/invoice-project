const Customer = require('../../domain/entity/customer');
const CustomerRepository = require('../../domain/repository/CustomerRepository');
const inmemoryStorage = require('../../interfaces/storage/inmemoryStorage');
const getCustomer = require('../../domain/service/customer/getCustomer');

const storage = new inmemoryStorage();
const mockCustomerRepository = new CustomerRepository(storage);

describe('getCustomer', () => {
  it('should resolve with the corresponding persisted user entity', async () => {
    // given
    const correspondingCustomer = new Customer();
    mockCustomerRepository.get = jest.fn(userId => correspondingCustomer);

    // when
    const user = await getCustomer(123, {
      customerRepository: mockCustomerRepository,
    });

    // then
    expect(mockCustomerRepository.get).toHaveBeenCalledWith(123);
    expect(user).toEqual(correspondingCustomer);
  });
});
