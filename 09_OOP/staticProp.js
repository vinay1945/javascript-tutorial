class user {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username : ${this.username}`);
  }

  static createId() {
    return `123456`;
  }
}

const vinay = new user("vinay");
console.log(vinay);
