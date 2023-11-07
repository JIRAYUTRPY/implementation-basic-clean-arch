export default class User {
  constructor(email, password, firstName, lastName, phone, address) {
    this.id = null;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
    this.phone = phone;
    this.address = address;
  }
}
