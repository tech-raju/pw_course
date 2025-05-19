const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// push methods

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// concat methods

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// spred methods
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [1, 2]]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray("Raju"))
console.log(Array.from("Raju"))
console.log(Array.from({name: "raju"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
