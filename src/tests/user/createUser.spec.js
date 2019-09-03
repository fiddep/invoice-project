const User = require('../../domain/entity/user');
const UserRepository = require('../../domain/repository/userRepository');
const inmemoryStorage = require('../../interfaces/storage/inmemoryStorage');
const createUser = require('../../domain/service/user/createUser');

const storage = new inmemoryStorage();
const mockUserRepository = new UserRepository(storage);

describe('createUser', () => {
  it('create and persist and user', async () => {
    const persistedUser = new User(
      null,
      'Name',
      'company',
      'email',
      'mobile',
      'address',
      'city',
      'zip',
      'settings'
    );
    mockUserRepository.persist = jest.fn(user => user);

    const result = await createUser(
      'Name',
      'company',
      'email',
      'mobile',
      'address',
      'city',
      'zip',
      'settings',
      {
        userRepository: mockUserRepository,
      }
    );

    expect(result).toEqual(persistedUser);
  });
});
