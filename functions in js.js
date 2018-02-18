/*
- Functions are objects, function names are just pointers
- Each function is an instance of a function type
- Function name without () accesses the function but does not execute it 

=======================================================================

- function declaration are avalable in the execution context
- function expressions are not complete until the execution reaches that line of code



// function total(num1, num2) {
//     return num1 + num2;
// }
// console.log(total(1, 2));

// This is a function declaration (above) - a function is being declared
// This can be hoisted i.e. the function can run before it is declared // because it is available in the global scope



var total = function (num1, num2) {
    return  num1 + num2;
}

- This is a function expression, this is more ideal as it cannot be hoisted into the global execution context
- This function cannot run before it is declared so this is why it is recommended

================================================

A function calling another function as as argument - using a function as a value

function callingAFunction(myFunc, myArgs) {
    return myFunc(myArgs);
}

function addHundred(num) {
    return num + 100;
}

var result = callingAFunction(addHundred, 1000);
console.log(result);

=================================================

What is inside functions?

- 2 x special objects:

1. arguments
2. this

- Arguments object is an array like object, containing all arguments

- Arguments property - callee - pointer to the function....that owns the argument

- function object also has additional 'caller' which contains.... a reference to the function that called this function or null

- this is a reference to the execution context that the function....is operating on

- when a function is called in the global scope of a web page...this points to window object

==================================================================

- Arguments property - callee - pointer to the function....that owns the argument

function factorial(num) {
    if (num < 1) {
        return 1;
    } else {
        //return num * factorial(num - 1); multiply by the function itself with it's argument incremented by 1
        return num * arguments.callee(num - 1); // may sometimes use this instead as, if use the function itself in another function might not ge the same result (so this is possily safer in some circumstances)
    }
}
console.log(factorial(5));
//console.log(arguments.callee);

// 5 - 4 3 2 1 = 120

=================================================================

- function object also has additional 'caller' which contains.... a reference to the function that called this function or null

function outside() {
    inside();
}

function inside() {
    console.log(inside.caller);
    // console.log(arguments.callee.caller);
}

//displays the source code of outer
console.log(outside());

============================================

Functions' this object

- this is a reference to the execution context that the function....is operating on

- when a function is called in the global scope of a web page...this points to window object

window.color = "red"; // global context

var obj = { color: "blue" }; // object's own context

function sayColor() {
    console.log(this.color); // function's own context
}

sayColor(); // red - the only context available to this function here

obj.sayColor = sayColor;
obj.sayColor(); // blue

================================================

function methods

- apply
- call
- bind


- apply

- accepts 2 x arguments
- value of this inside the function and an array of arguments
- The second argument may be an instance of Array
- But it can also be the arguments object


function sum(num1, num2) {
    return num1 + num2;
}

function callingSum(num1, num2) {
    return sum.apply(this, arguments); 
}

// wants to return the function and apply certain things
// apply the value if this - to the function's own execution context
// will pass the arguments object itself or an array
// returning the function's internal objects

console.log(callingSum(1, 1));

============

Example with an array

function sum(num1, num2) {
    return num1 + num2;
}

function callingSum(num1, num2) {
    return sum.apply(this, [num1, num2]);
}

console.log(callingSum(1, 1));

=========

- call

- Similar to apply(),
- But arguments passed to it differently
- first arg = the this value
- remaining args passed directly into the function

function sum(num1, num2) {
    return num1 + num2;
}

function callingSum(num1, num2) {
    return sum.call(this, num1, num2);
}

console.log(callingSum(1, 1))

=========

- bind

- creates a new function instance whose 'this' value is bound to the value that was passed to the bind().

window.color = "red";

var obj = {color: "blue"}

function sayColor() {
    console.log(this.color) // bound to the global execution context unless changed by bind as per below
}

var objSayColor = sayColor.bind(obj); // will bind to whatever is specified here
objSayColor(); // blue

*/