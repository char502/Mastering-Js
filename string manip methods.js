/*
String Manipulation Methods

- concat()
- slice()
- substr()
- substring()

var strVal = "hello";

var result = strVal.concat(" world", "!");
console.log(result);

===

var strVal = "hello world";

//console.log(strVal.slice(3)); // lo world // first char starts at 0
console.log(strVal.slice(3, 7)); // lo w // start at 3 and extract the first 7 characters

console.log(strVal.substring(3)); // lo world
console.log(strVal.substring(3, 7)); // lo world

console.log(strVal.substr(3)); // lo world
console.log(strVal.substr(3, 7)); // lo worl

======

- slice examples

var str = "Hello world!";
var res = str.slice(1, 5);
console.log(res); // ello 

======

Extract the characters from position 3 to 8:

var str = "Hello world!";
var res = str.slice(3, 8);
console.log(res); // lo wo

======

Extract only the first character:

var str = "Hello world!";
var res = str.slice(0, 1);
console.log(res); // H

======

Extract only the last character:

var str = "Hello world!";
var res = str.slice(-1);
console.log(res); // !

=================================================

- substring examples

The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.

===

Begin the extraction at position 2, and extract the rest of the string:

var str = "Hello world!";
var res = str.substring(2);

===

If "start" is greater than "end", it will swap the two arguments:

var str = "Hello world!";
var res = str.substring(4, 1);

===

If "start" is less than 0, it will start extraction from index position 0:

var str = "Hello world!";
var res = str.substring(-3);

===

Extract only the first character:

var str = "Hello world!";
var res = str.substring(0, 1);

===

Extract only the last character:

var str = "Hello world!";
var res = str.substring(11, 12);

=====================================================

- substr examples

The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.

- does not change the original string

===

Begin the extraction at position 2, and extract the rest of the string:

var str = "Hello world!";
var res = str.substr(2);

===

Extract only the first character:

var str = "Hello world!";
var res = str.substr(0, 1);

===

Extract only the last character:

var str = "Hello world!";
var res = str.substr(11, 1);

====================================================

- indexOf()
- lastIndexOf()
- trim()
- toUpperCase()
- toLowerCase()


- indexOf(), lastIndexOf()

- returns -1 if does not find the specified value


var strVal = "hello world";

console.log(strVal.indexOf("o")); //4 - looks from the beginning

console.log(strVal.lastIndexOf("o")); // 7 - looks from the end

===

Takes 2 x arguments

var strVal = "hello world";

// console.log(strVal.indexOf("o", 6)); // 7 - looks // from the beginning

console.log(strVal.lastIndexOf("o", 6)); // 4 - looks from the end

=================================================

- trim()

- removes whitespace from both sides of string
- does not change the original string

var strVal = "          hello world.       ";

//i.e. a lot of whitespace when user fills in an //online form

console.log(strVal.trim()); // hello world. - removes the whitespace from both sides

=======

- toUpperCase(), - toLowerCase()

var strVal = "hello world!";

console.log(strVal.toUpperCase()); // HELLO WORLD!
console.log(strVal.toLowerCase()); // hello world!


*/