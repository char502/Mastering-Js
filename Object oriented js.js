/*
Object oriented JS

Factory pattern, Constructor pattern, Prototype pattern


// Objects are a group of name-value pairs

var person = {
    name: "Charlotte",
    sayName: function() { // f inside an ob = method
        console.log(this.name);
    }
};

person.sayName("Charlotte");

==========

Factory pattern

function createPerson(name, age, job) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.job = job;
    obj.sayName = function() {
        console.log(this.name);
    };
    return obj;
}

var person1 = createPerson("Charlotte" , 42, "Developer");
var person2 = createPerson("James", 36, "Customer Services");
console.log(person1, person2);

============

Constructor pattern



*/