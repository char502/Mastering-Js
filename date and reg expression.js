/*
date type

= number of milliseconds that have passed since Jan 1st 1970 UTC (Universal time code)

Date()

to create a date object use new operator with Date constructor Date()

var date = new Date(); 
console.log(date); // 2018-02-12T21:01:15.980Z - ??

===========

When used without any arguments, created object assigned current date and time.

===========

to get another date or time, must pass in the millisecond representation of the date.

2 x methods for this:

Date.parse() - accepts a string argument representing a date
Date.UTC()


toLocaleString() - returns the date and time in a format appropriate for the locale in which the browser is being run


var date = new Date().toLocaleString();
console.log(date); // 2/12/2018, 9:14:49 PM


Many other methods to display date/time
- toDateString()
- toTimeString()
etc

date/time methods:
var fullYear = new Date().getFullYear(); // 2018
var currentMonth = new Date().getMonth(); // 2
var currentDay = new Date().getDay(); // 12
etc

Can use popular JS library - Moment.js to manipulate and display dates and time in JavaScript

Link: https://momentjs.com/
*/



/*
regular expressions

- a sequence of characters that forms a pattern to match character combinations in strings

var re = /hello/

regular expression methods
test() and match()

string methods - match, search, replace, split

you create a regular string using new keyword or inbetween two //

=================================================================

var re = /hello/;
var sentence = "hello world"; // true
console.log(re.test(sentence));

=================================================================

var re = /^\d{3}$/; // looks for 3 digits (numbers) at the beginning of something then ends
console.log(re.test("123hello")); // false
console.log(re.test("123hello world"));

/^\d{3}$/ - explained

// - anything between these characters is part of the regular expression

^   - beginning
\d  - digit
$   - end
g   - global  

*/


