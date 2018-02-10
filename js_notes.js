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

*/

//No Block level scope