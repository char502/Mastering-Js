/*  

window object

BOM - Browser Object Model

html document is represented as element nodes
window object properties: 
                        document
                        location - href / pathname
                        localstorage
                        navigator.geolocation
                        history - back/forward

window object methods:
                        alert()
                        prompt()
                        open/close
                        setInterval()
                        setTimeout()

==============

To set an item to localStorage:

window.localStorage.setItem("name", "Charlotte Ellwood");

to retrieve item:

window.localStorage.getItem("name"); // "Charlotte Ellwood"

=========


navigator.geolocation

 - how a browser knows where you are
 - can build applications to track the user's location

=========

window.history.forward()

window.history.back()

=========

window.open(http:// ref here) // will open the specified web page

=========

var result = prompt("What is your name?");

if (result !== null) {
    alert("Welcome " + result);
}

=========








*/