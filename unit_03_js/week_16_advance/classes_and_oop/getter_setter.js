// using class method by getter and setter
class User {
  constructor(email, password){
    this.email = email;
    this.password = password
  }

  get email(){
    return this._email.toUpperCase()
  }

  set email(value){
    this._email = value
  }

  get password(){
    return `${this._password}raju`
  }

  set password(value){
    this._password = value
  }
}

const raju  = new User("r@raju.ai", "abcd")
console.log(raju.password)
console.log(raju.email)