class User {
  constructor(username){
    this.username = username
  }

  logMe(){
    console.log(`Username: ${this.username}`)
  }

  static createId(){
    return `123`
  }
}

const raju = new User('raju')
console.log(raju.createId())

class Teacher extends User{
  constructor(username, email){
    super(username)
    this.email = email
  }
}

const mi = new Teacher('miXiome', "mi@phone.com")
console.log(mi.createId())