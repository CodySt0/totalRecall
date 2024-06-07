// STRINGS

// firstVariable = "hello world";
// firstVariable = 1;
// let secondVariable = firstVariable;
// secondVariable = "any string";

firstVariable = "Hello World";
firstVariable = 1;
let secondVariable = firstVariable;
secondVariable = "any string";

// console.log(firstVariable); //1
console.log(firstVariable);

// const yourName = "Ariel";
// let hello = `Hello, my name is ${yourName}`
// console.log(hello);

const yourName = "Cody";
let hello = `Hello, my name is ${yourName}`;
console.log(hello);

//BOOLEANS

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

const a = 4;
const b = 54;
const c = 57;
const d = 16;
const e = "Kevin";

// console.log(a < b);
// console.log(c > d);
// console.log('Name' == 'Name');

console.log(a < b);
console.log(c > d);
console.log("Name" == "Name");

//FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false === false)
// console.log(e == 'Kevin');
// console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a == a || d); // note: the answer is a simple arithmetic equation, not something "weird" console.log(48 __ '48');

console.log(true || false);
console.log(false && false && false && false && false) || true;
console.log(false === false);
console.log(e == "Kevin");
console.log((a != b) != c);
console.log(a == a || d);

//the Farm
let animal = "cow";

const moo = (a) => {
  return a.toLowerCase() === "cow" ? "mooooo" : "Hey! You're not a cow";
};

console.log(moo(animal));
//Driver's Ed

//LOOPS

//The Basics

//Get Even

//Give Me 5

//Savings Account

//ARRAYS & CONTROL FLOW

//OBJECTS

// let longest = array.reduce( (firstEl, secondEl) => {
//         //if the first el is greater than the second el return firstEl
//         return firstEl.length > secondEl.length ? firstEl : secondEl;
//     }
// );

// console.log(longest)
