/*
Functions - advanced concepts

===

Function declaration:


- function declaration hoisting - key characteristic

- function declarations are read before the code executes because it becomes available in a global context (can be problematic)

sayHi(); // hi
function sayHi() {
    console.log(hi);
}

===

function expression

// looks like a normal variable assignment
// anonymous function is created and assigned to the variable
// anytime a function is being used as a value, it is a function expression

sayHi();// error - function does not exist yet
var sayHi = function() {
    console.log("hi");
};


======

Recursion

- recursive function typically formed when a function calls itself by name

(example of a recursive function)

function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        // it is a pointer to the function being executed
        return num * factorial(num - 1);
    }
}
console.log(factorial(5));

5 - 4 3 2 1  = 120

=======

function closures

- functions that have access to variables from 
- another function's scope
- Often accomplished by creating a function inside a function

function eat() {
    var fruit = "Apple";
    // this function is executed outside of it's execution context
    function watch() {
        console.log(fruit);
    }
    return watch;
}

var favFruit = eat();
favFruit(); // Apple

=======

object closures

- "this" object is based on the context in which a function is executed

- anonymous functions are not bound to an object in "this" context

var name = "The window";

var object = {
    name: "The object",
    getName: function() {
        var that = this;
        return function() {
            return that.name;
        };
    }
};

console.log(object.getName()());

=======

block scope and IIFE

// Prevents a function becoming a part of the global execution context
// Achieve this by wrapping the function in parenthesis
// Therefore creating it within its own scope

(function sayColor() {
    var color = "red";
    console.log(color);
})();


*/