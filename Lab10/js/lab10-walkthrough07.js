// Exercise 10.7 – More jQuery animation: image hover preview
$(function () {
    $("figure img").on("mouseover", function () {
        $("#preview").remove();
        var alt = $(this).attr("alt") || "Image preview";
        var src = $(this).attr("src");
        var newsrc = src.replace("small", "medium");
        var preview = $('<div id="preview"></div>');
        var image = $("<img>").attr("src", newsrc).attr("alt", alt);
        var caption = $("<p></p>").text(alt);
        preview.append(image, caption);
        $("body").append(preview);
        $(this).addClass("gray");
        preview.fadeIn(250);
    });
    function removePreview() {
        $(this).removeClass("gray");
        $("#preview").remove();
    }
    function movePreview(e) {
        $("#preview")
            .css("top", (e.pageY - 10) + "px")
            .css("left", (e.pageX + 30) + "px");
    }
    $("figure img").on("mouseleave", removePreview);
    $("figure img").on("mousemove", movePreview);
});
