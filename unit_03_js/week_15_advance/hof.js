const powerTwo = (n) => {
  return n ** 2
}

function powerCube(powerTwo, n){
  return powerTwo(n) * n
}

console.log(powerCube(powerTwo, 3))

// ++++++++++++++++++++++++++

function sayHello(){
  return () => {
    console.log("Hello Rohan")
  }
}

let guessValue = sayHello()
console.log(guessValue)

// another hof function example variable type +++++++++++++

const higherOrder = n => {
  const oneFun = m => {
    const twoFun = t => {
      return n + m + t
    }
    return twoFun
  }
  return oneFun
}

console.log(higherOrder(3)(5)(6))


const myNum = [1,2,3,4,5,6]

const sumArr = arr => {
  let total = 0
  arr.forEach(function(element){
    total += element
  });
  return total
}

console.log(sumArr(myNum))

function namePrint(){
  console.log("Hello Taniya !", Math.round(Math.random()*10 + 1))
}

// setInterval(namePrint, 1000)

setTimeout(namePrint, 5000)
