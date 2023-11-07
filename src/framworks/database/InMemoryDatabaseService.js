import seeds from "../../seeds.js";
export default class InMemoryDatabaserService {
  constructor() {
    this.users = [];
  }
  started() {
    this.users = seeds.users;
    this.currentId = this.users[this.users.length - 1].id;
  }
  add(userInstance) {
    try {
      this.currentId = this.currentId + 1;
      userInstance.id = this.currentId;
      this.users.push(userInstance);
    } catch (err) {
      throw new Error("InMemory Service Occured");
    }
    return userInstance;
  }
  getByEmail(userEmail) {
    let user;
    try {
      user = this.users.find((index) => index.email === userEmail);
    } catch (err) {
      throw new Error("InMemory Service Occured");
    }
    return user;
  }
}
