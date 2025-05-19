// Prototype Understanding section

// let myName = "raju     "
// let mysirname = "manjhi     "

// console.log(myName.trueLength)


let myHeros = ["thor", "spiderman"]

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function(){
    console.log(`Spidy power is ${this.spiderman}`)
  }
}

Object.prototype.raju = function(){
  console.log(`raju is present in all objects`)
}


Array.prototype.heyRaju = function(){
  console.log(`Raju says hello`)
}
// heroPower.raju()
// myHeros.raju()
// myHeros.heyRaju()
// heroPower.heyRaju()


// Inheritance ++++++++++++++++++++++++++++++++++++++++++

const User = {
  name: "youtube",
  email: "youtube@gmail.com"
}

const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssignment: 'JS assignment',
  fullTime: true,

  __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Mordern Syntax +++++++++++++++++

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "UnitedStateOfAmerica"

String.prototype.trueLength = function(){
  console.log(`${this}`)
  console.log(`True lenght is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"raju".trueLength()
"iceTea".trueLength()
