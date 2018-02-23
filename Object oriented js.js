/*
Object oriented JS

Factory pattern, Constructor pattern, Prototype pattern


// Objects are a group of name-value pairs

var person = {
    name: "Charlotte",
    sayName: function() { // f inside an ob = method
        console.log(this.name);
    }
};

person.sayName("Charlotte");

==========

Factory pattern

function createPerson(name, age, job) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.job = job;
    obj.sayName = function() {
        console.log(this.name);
    };
    return obj;
}

var person1 = createPerson("Charlotte" , 42, "Developer");
var person2 = createPerson("James", 36, "Customer Services");
console.log(person1, person2);

============

Constructor pattern

- The only difference between constructor functions and other functions is the way in which they are called.

- Any function that is called with the new operator acts as a constructor

- It is conventional to name the constructor function with a capital letter

- all properties and methods are assigned directly onto the 'this' object

function CreatePerson(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    };
}

var person1 = new CreatePerson("Char", "42", "developer")
var person2 = new CreatePerson("Thomas", "8", "schoolage")
console.log(person1, person2)

============

Prototype pattern

- Whenever a function is created, it's prototype proerty is also created....which is an object

- person.prototype.constructor points to Person

- Instead of assigning object information in the constructor...they can be assigned directly to the prototype.

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    };
}

var person1 = new Person("Char", "42", "developer");
var person2 = new Person("Thomas", "8", "schoolage");
console.log(Person.prototype.constructor); 
// Will print out the person function itself, i.e:

ƒ Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    };
}

===

function Person() {
    //
}

Person.prototype.name = "Charlotte";
Person.prototype.age = 42;
Person.prototype.sayName = function() {
    console.log(this.name);
};

var person1 = new Person();
person1.sayName(); // Charlotte

// Properties are added directly to the // prototype property

var person2 = new Person();
person1.sayName(); // Charlotte

console.log(Person.prototype.isPrototypeOf(person1));
console.log(Person.prototype.isPrototypeOf(person2));

// ======

// Object keys

//retrieve a list of properties off an object keys // method

var keys = Object.keys(Person.prototype);
console.log(keys);
// [ 'name', 'age', 'sayName' ]


// ===

Can also use object literal

function Person() {
    //
}

Person.prototype = {
    name: "Charlotte",
    age: 30,
    sayName: function() {
        console.log(this.name);
    }
};

var person1 = new Person();
person1.sayName(); // Charlotte

var person2 = new Person();
person1.sayName(); // Charlotte

console.log(Person.prototype.isPrototypeOf(person1));
console.log(Person.prototype.isPrototypeOf(person2));

var keys = Object.keys(Person.prototype);
console.log(keys);

Output: 

Charlotte
Charlotte
true
true
[ 'name', 'age', 'sayName' ]


======

Defining the constructor itself

function Person() {
    //
}

Person.prototype = {
    constructor: Person,
    name: "Charlotte",
    age: 30,
    sayName: function() {
        console.log(this.name);
    }
};

var person1 = new Person();
person1.sayName(); // Charlotte

var person2 = new Person();
person1.sayName(); // Charlotte

console.log(Person.prototype.isPrototypeOf(person1));
console.log(Person.prototype.isPrototypeOf(person2));

===============================

Combination of Constructor and Prototype Pattern (most used pattern)

- With this approach, each instance ends up with its own copy of the instance properties
- But they all share references to methods


function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Zen" , "Ram"];
}

Person.prototype = {
    constructor: Person,
    sayName: function() {
        console.log(this.name);
    } 
};

var person1 = new Person("Charlotte", 40, "Web Developer");
person1.friends.push("Thomas");

var person2 = new Person("James", 36, "Customer Services");

console.log(person1, person2);

output: 

Person {
  name: 'Charlotte',
  age: 40,
  job: 'Web Developer',
  friends: [ 'Zen', 'Ram', 'Thomas' ] 
}
Person {
  name: 'James',
  age: 36,
  job: 'Customer Services',
  friends: [ 'Zen', 'Ram' ] 
}

*/