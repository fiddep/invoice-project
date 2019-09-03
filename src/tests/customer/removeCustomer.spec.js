const CustomerRepository = require('../../domain/repository/CustomerRepository');
const removeCustomer = require('../../domain/service/customer/removeCustomer');

const mockCustomerRepository = new CustomerRepository();

describe('removeCustomer', () => {
  it('should resolve (without result)', async () => {
    mockCustomerRepository.remove = jest.fn(() => true);

    await removeCustomer(123, { customerRepository: mockCustomerRepository });

    expect(mockCustomerRepository.remove).toHaveBeenCalledWith(123);
  });
});
