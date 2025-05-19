class User {
  constructor(username){
    this.username = username
  }

  logMe(){
    console.log(`USERNAME is ${this.username}`)
  }
}

class Teacher extends User{
  constructor(username, email, password){
    super(username)
    this.email = email
    this.password = password
  }

  addCourse(){
    console.log(`A new course was added by ${this.username}`);
    
  }
}

const tea = new Teacher("tea", "tea@gmail.com", "1234")
tea.logMe()

const masalaTea = new User('masalaTea')

masalaTea.logMe()

console.log(tea instanceof Teacher)
console.log(masalaTea instanceof User)