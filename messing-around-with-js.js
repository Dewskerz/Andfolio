/*
const hello_world = "hello from Javascript!";
let debugging_code = "this is an error";

console.error(debugging_code);

debugging_code = "this is a warning";

console.warn(debugging_code);

// variable types are
// String, Numbers, Booleans, null, and undefined

const string_example = "Andrew";
const num_example = 3.14;
const bool_test = true;
const this_is_null = null;
const this_is_undefined = undefined;
let this_is_also_undefined;

console.log(typeof this_is_null); // it says object but it is wrong
console.group(this_is_null);

//////////////////////
// Concatenation
//////////////////////

console.log('my name is ' + string_example + ' and my fav num is ' + num_example);

// template string
console.log(`My name is ${string_example} and my fav num is ${num_example}`);

// Strings have all of the expected functions and properties

/////////////////////////
// Arrays
//////////////////////

const array_example = ['apples', 'oranges', 2, true, 'suqma'];

array_example[array_example.length] = 'derp';

array_example.push("added to end");
array_example.unshift("beginning");

console.log(array_example);
console.log(array_example.pop());
console.log(array_example.includes("added to end"));
console.log(array_example.indexOf("apples"));



///////////////////////
/////////Object Literals
//////////////////////


const person = {
    first_name: "Andrew",
    last_name: 'Cunningham',
    hobbies: ['Dota 2', 'Hating my job'],
    things_i_want: ['job satisfaction', ],
    address: {
        street_number: 911,
        street_name: 'derp way'
    }
}

const {first_name, last_name, address} = person;

console.log(person);
console.log(first_name);



///////////////////////
///// JSON formatting
//////////////////////


const todos = [
    {
        id: 1,
        text: 'Learn how to code JS',
        is_completed: false
    },
    {
        id: 2,
        text: 'Lose a bunch of rounds of dota',
        is_completed: true
    },
    {
        id: 3,
        text: 'Win exactly one round of dota',
        is_completed: true
    },
];

const to_json = JSON.stringify(todos);
console.log(to_json);




// simple array looping

for (let todo of todos) {
    // do stuff
}

// high-order array methods

// forEach, map, and filter
todos.forEach(function(todos) {
    // do shit with todos
});

// map
const todosText = todos.map(function(todos) {
    // this returns an array of just some alues
    return todos.text;
});

// filter
const todos_text_2 = todos.filter(function(todos) {
    return todos.is_completed === true;
});

const todos_text_3 = todos.filter(function(todos) {
    return todos.is_completed === true;
}).map(function(todos) {
    return todos.text;
});

console.log(todos_text_3);



// == matches string
// === also matches data type
// the instructor likes to always match the type

//////////////////////
/// object oriented programming
/////////////////////


// Prototype
// don't use these

function Person(first_name, last_name, dob) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.dob = new Date(dob);
}


// Prototype them
Person.prototype.get_birth_year = function () {
    return this.dob.getFullYear();
}

Person.prototype.get_full_name = function () {
    return `${this.first_name} ${this.last_name}`;
}





/////////////////////////
// CLASSES
// Now classes are in JS!
///////////////////
class Person {
    constructor(first_name, last_name, dob) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.dob = new Date(dob);
    }

    get_birth_year() {
        return this.dob.getFullYear
    }

    get_full_name() {
        return `${this.first_name} ${this.last_name}`;
    }


}


const person1 = new Person ('Andrew', 'Cunningham', '5/2/1991');
const person2 = new Person ('Melinda', 'Cunningham', 'May 17 1990');
console.log(person1.dob.getDay());
console.log(person1); 
console.log(person2.get_full_name());






/////////////
// DOM = Document Object Model
// the dude has a 4 part series on it
////////////

// How to select things from the DOM

// window object has a ton of stuff
// can get interal storage, fetch (for http request), height, width, document

// apparently this is a lot easier with a framework?

const form = document.getElementById('my-form'); // this is old, use the query selector
const query_selector = document.querySelector('.container'); // or h1, if there is more than 1 h1 it will get the first one.
const can_get_many = document.querySelectorAll('.item'); // this returns a node List (array)
can_get_many.forEach((item) => {
    console.log(item);
});
*/
//const ul = document.querySelector('.items');

/*
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello from Javascript';
ul.children[1].innerText = 'Another way to edit';
ul.children[ul.children.length - 1].innerHTML = '<h1>Hello!</h1>';
*/
//const btn = document.querySelector('.btn');
//btn.style.background = 'red';

const my_form = document.querySelector('#my-form');
const name_input = document.querySelector('#name');
const email_input = document.querySelector('#email');
const msg = document.querySelector('.msg');
const user_list = document.querySelector('#users');

my_form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (name_input.value === '' || email_input.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Name or Email invalid';

        setTimeout(() => msg.remove(), 5000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${name_input.value} : ${email_input.value}`));
        user_list.appendChild(li);

        name_input.value = '';
        email_input.value = '';
    }

    // next up should be doing things with cookies or a database
}

/*
// we have so many evemts, click, mouseover, mouseout, input events
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    ul.firstChild.textContent = 'You clicked it';
});
*/
    
