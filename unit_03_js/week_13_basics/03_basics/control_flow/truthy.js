const userEmail = []


if (userEmail) {
    // console.log("Got user email");
} else {
    // console.log("Don't have user email")
}

// falsy values

// false, 0, -0, Bigint 0n, "", null, undefined, NaN

// truthy value


// "0", 'false' " ", [], {}, function(){}


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//    console.log("Object is empty") 
// }




// Nullish coalecsing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 14
// val1 = null ?? 10 ?? 14



// console.log(val1);


// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")