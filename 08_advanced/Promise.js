// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const promiseOne = new Promise((resolve, reject) => {
  // do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("async task is compelete");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("async task promise consumed");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "vinay", email: "vinay@gamil.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "vinay" });
    } else {
      reject(`ERROR`);
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((e) => {
    console.log(e);
  }).finally(()=>{
    console.log('the promise is either resolved or rejected');
  })

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "4564" });
    } else {
      reject(`ERROR`);
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const resp = await promiseFive;
    console.log(resp);
  } catch (e) {
    console.log(e);
  }
}

consumePromiseFive();

// async function promiseSix() {
//   try {
//     const resp = await fetch(`https://api.github.com/users/vinay1945`);
//     const data = await resp.json();
//     console.log(data);
//   } catch (e) {
//     console.log(e);
// }
// }

// promiseSix();

fetch(`https://api.github.com/users/vinay1945`).then((resp)=>{
    return resp.json()
}).then((data)=>{
    console.log(data);
}).catch((e)=>{
    console.log(e);
})
