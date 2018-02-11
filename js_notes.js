/** 
execution context and scope chain

Execution Context
=================
- Execution context of a variable or function defines what other data it has access to.
- Each function call has its own execution context

Global Execution Context
========================
- This is the outermost one.
- In web browsers it is window object

Scope Chain
===========
- When code is executed in context, a scope chain is created.
- It's purpose is to provide access to all variables and functions needed to the execution context.
- This chain continues as NEEDED until global context is reached - which is window object



No Block level scope

EcmaScript-6 block level scope is possible using let or const to create variables or functions.

They don't become part of global window object like var

if (true) {
    var color = "red"; //automatically becomes part of the global context
 }

the only exception is functions:

function sayColor () {
    var color = "green"; //Here the most immediate context is the function
 }
*/

/*
Reference types

JavaScript Reference Type 

traditional programming languages (i.e. Java) - classes are reference type

in JS it is object
= the base from which all other ref types inherit basic behaviour
all ref types i.e. Array, Date and RegExp - inherit their basic bahaviour from object type

2 x ways to create objects:

===========
var person = new Object();
===========

or

==========
var person = { // = object literal

}
==========

*/