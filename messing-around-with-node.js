/*
Some commands that i used to get started
npm init
npm insall
npm install uuid
npm install -D nodemon
*/

// we could use this, but we would have to implement Babble
//import person from './modules/person';

//const { default: Person } = require('./modules/person');
const Person = require('./modules/person');

// this method of module is called CommonJS
const person1 = new Person('Andrew Cunningham', 31);

console.log(person1.greeting());

/////////////////////////
// SOME OF NODE'S CORE MODULES
// https://nodejs.org/dist/latest-v18.x/docs/api/
// I learned this on node 11, we are now on 18
////////////////////////////

debugger;




