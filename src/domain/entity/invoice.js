function Invoice(id, invoiceId, order, customer, user, createdAt) {
  this.id = id;
  this.invoiceId = invoiceId;
  this.order = order;
  this.customer = customer;
  this.user = user;
  this.createdAt = createdAt;
}

module.exports = Invoice;
