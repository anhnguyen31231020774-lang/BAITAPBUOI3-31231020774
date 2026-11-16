// Exercise 9.2 – DOM family relations
var stories = document.getElementById("stories");
if (stories) {
    for (var i = 0; i < stories.childNodes.length; i++) {
        var node = stories.childNodes[i];
        console.log("child " + i + " = " + node + " nodeType=" + node.nodeType);
        if (node.nodeType === 1) node.style.backgroundColor = "#fff2cc";
    }
}
