/*

- setTimeout
- setInterval

- JavaScript's execution in browser is single threaded (code gets executed line by line - not multithreaded)

- Can use setInterval or setTimeout to run the code in specific time

===

- setTimeout

- to run after a set period
- runs only once


setTimeout(function() {
    console.log("hello world");
}, 3000);

// (time is in milliseconds so this is set to run in 3 seconds)

===

- setInterval

- will run over and over again as per the time interval spcified (i.e. below example, every three seconds)


setInterval(function() {
    console.log("hello world");
}, 3000);


*/

