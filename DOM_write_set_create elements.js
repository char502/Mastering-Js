/*
DOM - write, set and create elements

- document.write
- get attribute
- set attribute
- create element

=======

document.write("Hello world writing in document");

var div = document.getElementById("root");
//console.log(div.getAttribute("id"));

div.setAttribute("id", "hahaha");
console.log(div.getAttribute("id"));

function myClick() {
    var div = document.createElement("h1");
    var text = "hello world";
    var newH1 = document.body.appendChild(div);
    newH1.innerText = text;
}


=====

Finding elements in the DOM using selectors



*/