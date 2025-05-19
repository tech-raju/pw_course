// Object base syntax of getter and setter

const User = {
  _email: "r@rj.com",
  _password: "asdfsf",

  get email(){
    return this._email.toLocaleUpperCase()
  },
  set email(value){
    this._email = value
  }
}

const tea = Object.create(User)
console.log(tea.email);
