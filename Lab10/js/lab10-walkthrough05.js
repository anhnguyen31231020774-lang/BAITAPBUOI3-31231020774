// Exercise 10.5 – Inserting DOM elements
$(function () {
    var img = $('<img src="images/art/thumbs/13030.jpg" alt="Artwork preview" class="inserted-artwork">');
    var panel = $(".panel");
    // Choose one insertion method to demonstrate. This places the image inside the panel.
    panel.append(img);
});
