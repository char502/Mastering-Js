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

*/