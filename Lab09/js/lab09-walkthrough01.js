// Exercise 9.1 – Basic DOM selection
var msg = document.getElementById("msgArea");
if (msg) {
    msg.value = "here is some text";
    var title = document.getElementById("pageTitle");
    if (title) title.innerHTML = "New Title";
    if (title) title.innerHTML = "Even newer title";
    var first = document.getElementById("first");
    if (first) msg.value = first.innerHTML;
    if (first) msg.value = first.innerText;
    msg.value = "My class is " + msg.getAttribute("class");
    var textareas = document.getElementsByTagName("textarea");
    if (textareas.length) textareas[0].value = "selected by tag name";
    var spans = document.getElementsByTagName("span");
    for (var i = 0; i < spans.length; i++) {
        msg.value += "\\n" + spans[i].innerText;
    }
}
