const lastEl = require('../../utils/last');

class inmemoryStorage {
  _dataAsArray() {
    return Object.keys(this.data).map(key => this.data[key]);
  }

  constructor() {
    this.index = 1;
    this.data = {};
    this.ids = [];
  }

  static async of() {
    return new inmemoryStorage();
  }

  persist(entity) {
    const row = Object.assign({}, entity);
    const rowId = this.index++;

    row.id = rowId;
    this.data[rowId] = row;
    this.ids.push(rowId);

    return Promise.resolve(row);
  }

  merge(entity) {
    let row = this.data[entity.id];
    Object.assign(row, entity);
    return Promise.resolve(row);
  }

  remove(id) {
    delete this.data[id];
    return Promise.resolve(true);
  }

  get(id) {
    return Promise.resolve(this.data[id]);
  }

  find(filters) {
    return Promise.resolve(
      this._dataAsArray().filter(x =>
        Object.keys(filters).every(key => x[key] === filters[key])
      )
    );
  }

  last() {
    return Promise.resolve(this.data[lastEl(this.ids)]);
  }
}

module.exports = inmemoryStorage;
