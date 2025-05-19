// Object literal +++++++++++++++++

const user = {
  username: "raju",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function(){
    // console.log('Got user details from database')
    // console.log(`Username: ${this.username}`)
    // console.log(this)
  }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)


// constructor function +++++++++++++++++++++++


function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
      console.log(`Welcome ${this.username}`)
    }

    return this
}

// new keyword is constructor function
const userOne = new User("raju", 12, true)
const userTwo = new User("youtube", 11, false)
console.log(userOne.constructor)
// console.log(userTwo)

// new keyword+++++++
// step-1
// create empty object,its called instance
// step-2 
// call constructor function from new keyword,new keyword packed all argument and surved
// step-3
// all are argument inject in this keyword
// step-4
// we get the result

