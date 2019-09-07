// @ts-check

const isFunction = require('../../utils/isFunction');

/**
 * @typedef {import('./orderRow')} OrderRow
 *
 * @typedef {Object} Order
 * @param {number} id
 * @param {OrderRow[]} rows
 * @param {string} userReference
 * @param {string} customerReference
 */
function Order(id, rows, userReference, customerReference) {
  this.id = id;
  this.rows = rows;
  this.userReference = userReference;
  this.customerReference = customerReference;
}

Order.of = function of(obj) {
  return new Order(obj.id, obj.rows, obj.userReference, obj.customerReference);
};

Order.prototype.calculateSum = function calculateSum() {
  return this.rows.reduce((tot, row) => tot + row.calculateSum(), 0);
};

Order.prototype.calculateTax = function calculateTax() {
  return this.rows.reduce((tot, row) => tot + row.calculateTax(), 0);
};

Order.prototype.calculateTaxMap = function calculateTaxMap() {
  return this.rows.reduce(
    (map, row) => ({
      ...map,
      [row.getTaxLabel()]: (map[row.getTaxLabel()] || 0) + row.calculateTax(),
    }),
    {}
  );
};

Order.prototype.calculateNet = function calculateNet() {
  return this.rows.reduce((tot, row) => tot + row.calculateNet(), 0);
};

Order.prototype.addRow = function addRow(row) {
  this.rows.push(row);
  return this;
};

module.exports = Order;
