function OrderRow(unit, description, price, tax, discount) {
  this.unit = unit;
  this.description = description;
  this.price = price;
  this.tax = tax;
}

OrderRow.prototype.calculateSum = function calculateSum() {
  return this.calculateNet() + this.calculateTax();
};

OrderRow.prototype.calculateTax = function calculateTax() {
  return this.calculateNet() * this.tax;
};

OrderRow.prototype.getTaxLabel = function getTaxLabel() {
  return this.tax * 100 + '%';
};

OrderRow.prototype.calculateNet = function calculateNet() {
  return this.unit * this.price;
};

module.exports = OrderRow;
