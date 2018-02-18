/*
JS Primitive wrapper types

- string, number, Boolean


var person = {
    name: "Charlotte" 
}; // Object - this is a Reference type
person.age = 41; // can add properties to it
console.log(person) // {name: "Charlotte", age: 41}


var myString = "hello world";  // primitive type, cannot add properties to it

- although are still basically objects behind the scenes.
- so, cannot add properties but there are still some pre-built properties that can be used to manipulate strings i.e. substring
- or Numbers i.e. toFixed (a method to set num of decimal places)

=======

how myString is created behind the scenes:

var myString = "hello world"; // what is typed

//var myString = new String("hello world"); // what is //happening bts
console.log(myString);

======

Some useful methods:

var myString = "hello world";

var mySubString = myString.substring(2);
console.log(mySubString); //llo world (first two letters removed)

===

var num = 10; // new Number(10) - how created behind the scenes

console.log(num.toFixed(2)) 
// to set to 2 decimal places i.e. 10.00

*/