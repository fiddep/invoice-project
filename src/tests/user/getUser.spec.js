const User = require('../../domain/entity/user');
const UserRepository = require('../../domain/repository/userRepository');
const getUser = require('../../domain/service/user/getUser');

const mockUserRepository = new UserRepository();

describe('getCustomer', () => {
  it('should resolve with the corresponding persisted user entity', async () => {
    // given
    const correspondingUser = new User();
    mockUserRepository.get = jest.fn(userId => correspondingUser);

    // when
    const user = await getUser(123, {
      userRepository: mockUserRepository,
    });

    // then
    expect(mockUserRepository.get).toHaveBeenCalledWith(123);
    expect(user).toEqual(correspondingUser);
  });
});
