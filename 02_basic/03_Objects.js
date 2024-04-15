// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "vinay",
    "full name":"vinaykumar porandla",
    age: 19,
    email: "vinay@gamil.com",
    location: "bhiwandi",
    isLoggedIN: false,
    lastLoginDays: ["Monday", "sunday"],
    [mySym]: "mykey1"
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "kumar@email.com"
// Object.freeze(JsUser)
JsUser.email = "vinaykumar@email.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log(`hello js user ${JsUser.name}`);
}
JsUser.greeting2 = function(){
    console.log(`hello js user ${this.name}`);
}

console.log(JsUser.greeting2());