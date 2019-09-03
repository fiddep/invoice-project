function user(id, name, company, email, mobile, address, city, zip, settings) {
  this.id = id;
  this.name = name;
  this.company = company;
  this.email = email;
  this.mobile = mobile;
  this.address = address;
  this.city = city;
  this.zip = zip;
  this.settings = settings;
}

module.exports = user;
