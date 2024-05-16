class User {
  constructor(username) {
    this.username = username;
  }

  logme() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  AddCourse(){
    console.log(`a new coures was added by ${this.username}`);
  }

}


const chai = new Teacher('chai', 'chai@gamil','4564')

chai.AddCourse()
chai.logme()


console.log(chai instanceof Teacher);