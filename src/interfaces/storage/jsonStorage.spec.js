const fs = require('fs').promises;
const path = require('path');
const jsonStorage = require('./jsonStorage');

/* TODO clean up test files */
describe('jsonStorage', () => {
  const dataFile = path.resolve('jsonStorage1.json');

  beforeAll(async () => {
    await fs.writeFile(
      dataFile,
      JSON.stringify([{ id: 1 }, { id: 3, foo: 'bar' }])
    );
  });
  afterAll(async () => {
    await fs.unlink(dataFile);
  });

  it('reads objects from file', async () => {
    const store = await jsonStorage.of(dataFile);
    const obj = {};

    const result = await store.get(1);

    expect(result).toEqual({ id: 1 });
  });

  it('applies filters object on find', async () => {
    const store = await jsonStorage.of(dataFile);

    const result = await store.find({ foo: 'bar' });

    expect(result).toEqual({ id: 3, foo: 'bar' });
  });

  it('item can be maniplulated and persisted back', async () => {
    const store = await jsonStorage.of(dataFile);

    const obj = await store.get(1);
    obj.stuff = 'hej';
    const result = await store.persist(obj);

    expect(result).toEqual({ id: 1, stuff: 'hej' });
  });
});

describe('jsonStoragePersistance', () => {
  const dataFile = path.resolve('jsonStorage2.json');

  beforeAll(async () => {
    await fs.writeFile(dataFile, JSON.stringify([{ id: 1 }]));
  });
  afterAll(async () => {
    await fs.unlink(dataFile);
  });

  it('adds entry to file', async () => {
    const store = await jsonStorage.of(dataFile);
    const obj = {};

    const result1 = await store.persist(obj);
    const result2 = await store.get(2);
    const result3 = await store.lastId();
    const result4 = await store.last();

    expect(result1).toEqual({ id: 2 });
    expect(result2).toEqual({ id: 2 });
    expect(result3).toEqual(2);
    expect(result4).toEqual({ id: 2 });
  });
});
