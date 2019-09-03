class abstractRepository {
  constructor(repository) {
    this.repository = repository;
  }

  persist(userEntity) {
    return this.repository.persist(userEntity);
  }

  merge(userEntity) {
    return this.repository.merge(userEntity);
  }

  remove(userId) {
    return this.repository.remove(userId);
  }

  get(userId) {
    return this.repository.get(userId);
  }

  find() {
    return this.repository.find();
  }

  last() {
    return this.repository.last();
  }
}

module.exports = abstractRepository;
