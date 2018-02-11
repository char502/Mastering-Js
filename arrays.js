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
push() accepts any number of args and add to end of array
pop() removes last item in array

- push() and pop()

var colors = [];
colors.push("red", "yellow", "blue");
var removedItem = colors.pop();
console.log(colors, "Removed Item: ", removedItem);

- pop always takes last item of the array
*/


/*
Queue methods - shift(), unshift()


*/