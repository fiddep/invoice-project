function invoiceId(strategy) {
  this.strategy = getStrategy(strategy);
}

invoiceId.prototype.setStrategy = function setStrategy() {
  this.strategy = getStrategy(strategy);
};

invoiceId.prototype.generate = function generate(previousId, time) {
  return this.strategy(previousId, time);
};

function getStrategy(strategy) {
  switch (strategy) {
    case 'year-increment':
      return yearIncrementStrategy;
    case 'linear-increment':
      return linearIncrementStrategy;

    default:
      return linearIncrementStrategy;
  }
}

function yearIncrementStrategy(previousId, time) {
  let [year, id] = previousId.split('-');
  year = parseInt(year, 10);
  id = parseInt(id, 10);

  if (year < time.getYear()) {
    year = time.getYear();
    id = 999;
  }

  return `${year}-${id + 1}`;
}

function linearIncrementStrategy(previousId, time) {
  return `${parseInt(previousId, 10) + 1}`;
}

module.exports = invoiceId;
