// Exercise 9.3 – Modifying the DOM
var first = document.getElementById("first");
if (first) {
    var text = document.createTextNode("this is programmatically created");
    var p = document.createElement("p");
    p.appendChild(text);
    first.appendChild(p);
}
var icons = document.getElementById("iconList");
var deleteItem = document.getElementById("deleteThisOne");
if (icons && deleteItem) icons.removeChild(deleteItem);
