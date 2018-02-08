// alert('new web page')

// var message = "hello"
// console.log(typeof message)

// alert(Number.MAX_VALUE)
// alert(Number.MIN_VALUE)

// alert(NaN === Nan)

// alert(isNaN(NaN)) // true
// alert(isNaN(100)) // false
// alert(isNaN('100')) // false
// alert(isNaN('blue')) // false
// alert(isNaN(false)) // true becomes 1 - false becomes 0

// var num1 = parseInt("12324lkdnsl")
// console.log(num1)

// var num2 = parseFloat("20.50")
// console.log(num2)

// var age = 30
// var ageStringify = age
// consol.log(typeof ageStringify = age)

// Objects:

// var person = {
//   name: 'Ryan',
//   age: 30,
//   sayName: function () {
//     return this.name
//   }
// }

// person.name = 'Zen'
// person.address = 'Sydney Australia'
// console.log(person.sayName(), person.age, person.address)

// console.log('Has this property? ', person.hasOwnProperty('pet'))

// Nested Object

// var person = {
//   name: 'Ryan',
//   age: 30,
//   sayName: function () {
//     return this.name
//   },
//   likes: {
//     movies: {
//         one: 'The Matrix',
//         two: 'Jurassic Park',
//         three: 'Alien'
//     },
//     books: 'js Ninja'
//   }
// }

// console.log('My fav film is: ' + person.likes.movies)

// console.log('My fav film is: ' + person.likes["movies"] + ' and book ' + person.likes["books"])
// console.log(person["age"])

// console.log(person.likes['movies'].three)

// Unary operatos - only works on one value - when you see +/- etc, will try to perfom mathematical conversion,
// even if it is a string (will return NaN)

// var age = 30
// age++ //postfix
// console.log(age)

// Ternary Operators

// variable = expression ? true : false

// var num1 = 200
// var num2 = 100

// var result = (num1 > num2) ? 'That is correct' : 'That is wrong'
// console.log(result)

// Compound assignment operator

// var num = 10
// num += 10; // compound assignment operator (also use +/- and / etc)

// comma operators

// allows for more than one operation in a single statement

// var name = "Charlotte", 
//     age = 30, 
//     address = "England"

// do while loop - runs at least once

// do {
//   statement
// } while () expression

// var num = 0

// do {
//     num++
//     console.log('Number: ', num)
// } while (num < 10)

// while loop - evaluates the condition first then runs the loop

// var num = 0

// while (num < 5) {
//   num++
//   console.log('num: ' + num)
// }

// for in loop (works in js objects)

// goes through each of the properties of an object and returns them

// var person = {
//   name: 'Charlotte',
//   age: 40,
//   address: 'England'
// }

// item - can call it anything you want

// for (item in person) {
//   alert(item)
// }

// also:

// for (item in window) {
//   console.log(item)
// }
// (to look at all the properties of the window object)

// labelled break and continue statements:

var num = 0

for (var i = 0; i < 10; i++) {
  if (i == 5) {
    break
  }
  num++ // num being incremented together with the loop
}
console.log(num)
// result = 5 - the break stement stops the loop at 5

var num = 0

for (var i = 0; i < 10; i++) {
  if (i == 5) {
    continue
  }
  num++ // num being incremented together with the loop
}
console.log(num)
// result = 9
// one incrementor did not occur (the fifth) due to the continue statement

// nested for loops:

var num = 0

outerLabel: for (var i = 0; i < 10; i++) {
  for (var ii = 0; ii < 10; ii++) {
    if (i == 5 && ii == 5) {
      continue outerLabel // result is 95 as the one iteration it missed encountered the continue statement
    }
    num++
  }
}
console.log(num)
// result = 95

var num = 0

outerLabel: for (var i = 0; i < 10; i++) {
  for (var ii = 0; ii < 10; ii++) {
    if (i == 5 && ii == 5) {
      break outerLabel // result is 95 as the one iteration it missed encountered the continue statement
    }
    num++
  }
}
console.log(num)

// Switch statement
// Numbers

var i = 100

switch (i) {
  case 10:
    console.log('10')
    break
  case 20:
    console.log('20')
    break
  default:
    console.log('Nothing found')
}

// strings

var i = 'hi'

switch (i) {
  case 'hi':
    console.log('hi there')
    break
  case 'hello':
    console.log('hello there')
    break
  default:
    console.log('No one there')
}

// functions

function total (one, two) {
  var totalThis = one + two
  return totalThis
}

var result = total(1, 2)
console.log(result)

// multiple returns - as soon as the code matches it will stop executing 

function nameCheck (name) {
  if (name == 'Charlotte') {
    return 'Hi Charlotte'
  } else {
    return "I don't know you"
  }
  alert('hkhkhkjh'); // never executed, all conditions covered above
}

var result = nameCheck('hjhhjh')
console.log(result)

// Array like object represents arguments internally []
// js creates and internal array to hold the arguments whether defined or not
// However, better to have the params defined as clearer to read/ less confusing when come back to it later on

function sayHi () { // arguments not defined in ()
  return arguments[0] + ' ' + arguments[1] + ' ' + arguments[2] // can still specify using array/bracket notation
}

alert(sayHi('Charlotte', 'Js functions', 'right'))

// but better like this:

function sayHi (name, something, opinion) { // arguments defined in()
  return arguments[0] + ' ' + arguments[1] + ' ' + arguments[2] // can still specify using array/bracket notation
}

alert(sayHi('Charlotte', 'Js functions', 'right'))

// Can determine number of arguments using Arraylength property

function shopping (item1, item2) {
  if (arguments.length >= 2) {
    console.log('you are granted 20% discount')
  } else if (arguments.length <= 1) {
    console.log('you are not getting any discount')
  }
}

shopping('Milk');