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
//     return this.name;
//   },
//   likes: {
//     movies: {
//         one: 'The Matrix',
//         two: 'Jurassic Park',
//         three: 'Alien'
//     },
//     books: 'js Ninja'
//   }
// };

// console.log('My fav film is: ' + person.likes.movies)

//console.log('My fav film is: ' + person.likes["movies"] + ' and book ' + person.likes["books"]);
//console.log(person["age"]);

//console.log(person.likes['movies'].three);

//Unary operatos - only works on one value - when you see +/- etc, will try to perfom mathematical conversion,
// even if it is a string (will return NaN)

// var age = 30;
// age++; //postfix
// console.log(age);

//Ternary Operators

// variable = expression ? true : false;

// var num1 = 200;
// var num2 = 100;

// var result = (num1 > num2) ? 'That is correct' : 'That is wrong'
// console.log(result);

// Compound assignment operator

// var num = 10;
// num += 10; // compound assignment operator (also use +/- and / etc)


comma operators

allows for more than one operation in a single statement