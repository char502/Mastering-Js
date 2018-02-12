/*
Arrays

2 x ways to create arrays

========================
var colors = new Array('red', 'green', 'yellow');
========================

 var colors = ['red', 'green', 'yellow']; // array literal


 Detecting array:

 Array.isArray()

var colors = ["red", "green", "yellow"];
console.log(Array.isArray(colors))  // returns true
*/


/*
- Conversion methods - toString(), join()
- Stack methods - push(), pop()
- Queue methods - shift(), unshift()
- Reordering methods - reverse(), sort()
- Manipulation methods - concat(), slice(), splice()
- Location methods - indexOf(), lastIndexOf()
- Iterative methods - every(), some(), filter() forEach(), map()
- Reduce method - reduce(), reduceRight()
*/

//- Objects have toString(), toLocalString() and valueOf() methods


/*
Conversion methods - toString(), join()

- toString()

var colors = ["red", "green", "yellow"];
console.log(colors.toString())  // returns: red,green,yellow


- join()

var colors = ["red", "green", "yellow"];
console.log(colors.join(" "))  // returns: red green yellow

var colors = ["red", "green", "yellow"];
console.log(colors.join(" - "))  // returns: red - green - yellow
*/


/*
Stack methods - push(), pop()

stack method = 'last in first out'
push() - accepts any number of args and add to end of array
pop() - removes last item in array

- push() and pop()

var colors = [];
colors.push("red", "yellow", "blue");
var removedItem = colors.pop();
console.log(colors, "Removed Item: ", removedItem);

- pop always takes last item of the array
*/


/*
Queue methods - shift(), unshift()

queue method = 'first in first out'
unshift() - adds any number of args to front of array
shift() - removes first item in the array and returns it

- unshift()

var colors = [];
colors.unshift("red", "blue", "green");
colors.unshift("purple", "cyan");
console.log(colors); // [ 'purple', 'cyan', 'red', 'blue', 'green' ]

==============================

- shift()

var colors = [];
colors.unshift("red", "blue", "green");
colors.unshift("purple", "cyan"); //adds purple and cyan in front or rbg
var removedItem = colors.shift();
console.log(colors, "Removed Item: ", removedItem);

// [ 'cyan', 'red', 'blue', 'green' ] 'Removed Item: ' 'purple'
*/


/*
Reordering methods - reverse(), sort()

- reverse()

var values = [1, 2, 3, 4, 5];
values.reverse();
console.log(values); //[ 5, 4, 3, 2, 1 ]


sort() - puts values in ascending order

behind the scenes, converts the numbers to **STRINGS** then compares them so may get unexpected results when sorting numbers i.e.

=====================

var values = [1, 5, 9, 4, 7, 3, 10];
console.log(values.sort()); // [ 1, 10, 3, 4, 5, 7, 9 ]

===================================
var values = ["apples", "banana", "orange", "mango", "fig"];
console.log(values.sort());

// [ 'apples', 'banana', 'fig', 'mango', 'orange' ]

===================================

****To ensure expected result - sort takes a function (defining the sorting method required) as it's argument****


var values = [1, 5, 9, 4, 7, 3, 10];
console.log(values.sort(compare)); // [ 1, 3, 4, 5, 7, 9, 10 ]

function compare(val1, val2) {
    return val1 - val2;
}

the function (passed as an argument) allows a mathematical comparison to be done on the array

==================================

This will not work however when comparing strings


var values = ["apples", "banana", "orange", "mango", "fig"];
console.log(values.sort(compare));

// [ 'apples', 'banana', 'orange', 'mango', 'fig' ]

function compare(val1, val2) {
    return val1 - val2;
}

===

Have to use comparison operators:

var values = ["apples", "banana", "orange", "mango", "fig"];
console.log(values.sort(compareStr));

// [ 'apples', 'banana', 'fig', 'mango', 'orange' ]

function compareStr(val1, val2) {
    if (val1 < val2) {
        return -1; // neither true nor false, waiting for the change
    } else if(val1 > val2) {
        return 1; // as per boolean true
    } else {
        return 0; // as per boolean false
    }
};

***switch the comparison operators around if want to compare the other way i.e. < becomes > and > becomes < (can then compare z to a rather then a to z)***

===========================================

Can also be written this way (inserting a compare function as a callback  - numerical comparison example given:

var values = [1, 5, 9, 4, 7, 3, 10];

values.sort(function (a, b) {
    return a - b;
});
console.log(values);

*/


/*
Manipulation methods - concat(), slice(), splice() - lets you work with the items that are ALREADY in the array

- concat()

Joins two arrays
Does NOT modify the original array - returns a new array

var colors = ["red", "yellow", "blue"];
var totalColors = colors.concat(["black", "purple"]);
console.log('Original: ', colors, 'New: ', totalColors); 

// [ 'red', 'yellow', 'blue', 'black', 'purple' ]


- slice()

- takes two arguments, starting and stopping position

- if given only one argument, it returns all items between that position and the end of the array

- if given two arguments, it returns all items between start and the end position, not including the end position

- RETURNS A NEW ARRAY, ORIGINAL NOT CHANGED



var colors = ["red", "yellow", "blue", "green", "black"];
console.log(colors.slice(1, 4)); 

// [ 'yellow', 'blue', 'green' ] - does not include last one (arr pos 4)


- splice()

- can use to insert / replace / delete

- delete - using two arguments
- position of first item and number of items to delete
- insert/replace - same as above with 0 arguments and items to include

- CHANGES THE ORIGINAL ARRAY


Using splice to delete:

var colors = ["red", "yellow", "blue", "green", "black"];
var deletedItems = colors.splice(3, 2);
console.log('Colors: ', colors, 'Deleted: ', deletedItems); 

// Colors:  [ 'red', 'yellow', 'blue' ] 
// Deleted:  [ 'green', 'black' ]

===========================================================

var colors = ["red", "yellow", "blue", "green", "black"];
var deletedItems = colors.splice(1, 3);
console.log('Colors: ', colors, 'Deleted: ', deletedItems);

// Colors:  [ 'red', 'black' ] 
// Deleted:  [ 'yellow', 'blue', 'green' ]

===========================================================
To Insert (use 3 args)

i.e. 1 for starting position, 0 next (if don't want to delete anything), third position, anything want to add.


var colors = ["red", "yellow", "blue", "green", "black"];
var deletedItems = colors.splice(1, 0, 'i am not a color');
console.log('Colors: ', colors, 'Deleted: ', deletedItems);

// Colors:  [ 'red', 'i am not a color', 'yellow', 'blue', 'green', 'black' ] Deleted:  []
*/


/*
Location methods - indexOf(), lastIndexOf()

- both methods accept 2 x arguments:

- The item to look for 
- an optional index from which to start looking
- returns -1 if item is not found

indexOf()

- if no start position specified, starts at the beginning
- if item present more than once, returns position of FIRST occurance

var colors = ["red", "blue", "green", "black", "purple", "gold"];
console.log(colors.indexOf("gold"))

// 5


lastIndexOf()

- if no position specified, starts at end and finishes at beginning
- if item present more than once, returns position of LAST occurance

var colors = ["red", "blue", "green", "black", "purple", "gold"];
console.log(colors.lastIndexOf("gold"))
*/



/*
Iterative methods - every(), some(), filter() forEach(), map()

Each method accepts two arguments:

1. A function to run on each item
2. And optional scope object, in which to run the function

index and array are also available as arguments for these methods if required

- every()

- checks if ALL the values in an array are true or false as per a given condition (expressed in a function)
- does not change the original array

var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var everyResult = numbers.every(function(item, index, array) {
    return item > 2; // Are ALL values in the array greater than 2
});
console.log(everyResult); //false

==================================================================

- some()

- checks if ANY values in an array are true or false as per a given condition (expressed in a function)


var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

var someNumbers = numbers.some(function(item, index, array) {
    return item > 2; //Are ANY values in the array greater than 2
});
console.log(someNumbers); // true


index and array are also available for these methods if required

==================================================================

- filter()

var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

var filterResult = numbers.filter(function(item, index, array) {
    return item > 2;
});
console.log(filterResult); 

// [ 3, 4, 5, 4, 3 ] - has filtered to show only the numbers greater than 2

===================================================================

- forEach()

- calls a provided function once for each element in an array, in order
- does not have a return statement

var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

numbers.forEach(function(item, index, array) {
    console.log(item);
});


// 1
// 2
// 3
// 4
// 5
// 4
// 3
// 2
// 1

====================================================================

- map()

- creates a new array with the results of calling a function for every array element
-calls the provided function once for each element in an array in order
- does not change the original array

var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

var mapResult = numbers.map(function(item, index, array) {
    return "Num " + item;
});
console.log(mapResult);

// [ 'Num 1',
//   'Num 2',
//   'Num 3',
//   'Num 4',
//   'Num 5',
//   'Num 4',
//   'Num 3',
//   'Num 2',
//   'Num 1' ]

*/

/*

Reduce method - reduce(), reduceRight()

- both methods iterate over all items in the array and build up a value that is ultimately returned

- they take two arguments:

1. function call on each item
2. Initial value upon which the reduction is 

the function passed in accepts four arguments:
- previousValue
- currentValue
- itemIndex
- arrayObject


var numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce(function(prevValue, currentValue, index, array) {
    return prevValue + currentValue;
});
console.log(sum);


reduceRight()

- works the same (reduces the array to a single value) but executes from right to left
*/