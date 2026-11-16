// Exercise 8.8 – JavaScript functions
var boxClass = "movingDiv";
function outputBox(num) {
    var box = "<div class='" + boxClass + "' id='div" + num + "'>";
    box += "This is div " + num;
    box += "</div>";
    return box;
}
