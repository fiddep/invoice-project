const incrementDateBy = require('../../utils/incrementDateBy');

function Invoice(id, invoiceId, order, customer, user, createdAt, paymentTerm) {
  this.id = id;
  this.invoiceId = invoiceId;
  this.order = order;
  this.customer = customer;
  this.user = user;
  this.createdAt = createdAt;
  this.paymentTerm = paymentTerm;
}

Invoice.prototype.calculateDueDate = function calculateDueDate() {
  return incrementDateBy(this.createdAt, this.paymentTerm);
};

module.exports = Invoice;
