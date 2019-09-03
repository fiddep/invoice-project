const fs = require('fs').promises;

const lastEl = require('../../utils/last');

class jsonStorage {
  _dataAsArray() {
    return this.ids.map(id => this.data[id]);
  }

  initalizeData() {
    const parsed = require(this.fileName);
    this.data = parsed.reduce((map, obj) => ({ ...map, [obj.id]: obj }), {});
    this.ids = parsed.map(obj => obj.id);
    this.index = lastEl(this.ids) + 1;
  }

  constructor(filename) {
    this.fileName = filename;
    this.index = 1;
    this.data = {};
    this.ids = [];
  }

  static async of(filename) {
    const storage = new jsonStorage(filename);
    storage.initalizeData();
    return storage;
  }

  async persist(entity) {
    const row = Object.assign({}, entity);

    if (!row.id) {
      const rowId = this.index++;
      row['id'] = rowId;
      this.data[rowId] = row;
      this.ids.push(rowId);
    }

    await fs.writeFile(this.fileName, JSON.stringify(this._dataAsArray()));

    return Promise.resolve(row);
  }

  merge(entity) {
    let row = this.data[entity.id];
    Object.assign(row, entity);
    return Promise.resolve(row);
  }

  remove(id) {
    delete this.data[id];
    return Promise.resolve();
  }

  get(id) {
    return Promise.resolve(this.data[id]);
  }

  find(filters) {
    return Promise.resolve(
      this._dataAsArray().find(x =>
        Object.keys(filters).every(key => x[key] === filters[key])
      )
    );
  }

  last() {
    return Promise.resolve(this.data[lastEl(this.ids)]);
  }

  lastId() {
    return Promise.resolve(lastEl(this.ids));
  }
}

module.exports = jsonStorage;
