function SetUserName(username){
    this.username = username
    console.log('called');
}

function createUser(username, email, password){

    SetUserName.call(this, username)


    this.email = email
    this.password = password
}

const vinay = new createUser("viany", "viany@gmail.com", "65400")
console.log(vinay);