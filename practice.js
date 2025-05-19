// hoisting in javascript +++++++++++++++++++++


// getName()
// console.log(x)
// console.log(getName)



// function getName(){
//   console.log("raju")
// }

// function invocation and variable envirnment ++++++++++++++

var x = 1;

getName();
getSurname()
console.log(x)

function getName(){
  var x = 10;
  console.log(x)
}

function getSurname(){
  var x = 100;
  console.log(x)
}

