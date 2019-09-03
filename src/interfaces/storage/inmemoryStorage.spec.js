const inmemoryStorage = require('./inmemoryStorage');

describe('inmemoryStorage', () => {
  it('returns obj with id after persist', async () => {
    const store = new inmemoryStorage();
    const obj = {};

    const result = await store.persist(obj);

    expect(result).toEqual({ id: 1 });
  });

  it('removes true if entity was successfully removed', async () => {
    const store = new inmemoryStorage();
    const obj = {};

    const id = await store.persist(obj);
    const result = await store.remove(id);

    expect(result).toEqual(true);
  });

  it('nothing is persisted between instances', async () => {
    const store = new inmemoryStorage();

    const result = await store.get(1);

    expect(result).toEqual(undefined);
  });
});
