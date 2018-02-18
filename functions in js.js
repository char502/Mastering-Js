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

- this is a reference to the execution contextthat the function....is operating on

- when a function is called in the global scope of a web page...this points to window object

function factorial(num) {
    if (num < 1) {
        return 1;
    } else {
        //return num * factorial(num - 1);
        return num * arguments.callee(num - 1);
    }
}
//console.log(factorial(5));
//console.log(arguments.callee);

// 5 - 4 3 2 1 = 120

*/