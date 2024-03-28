//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 108
const scoreValue = 108.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('789')
const anotherId = Symbol('789')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Joker", "Vegeta", "Kilwis"];
let myObj = {
    name: "Jim",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId)