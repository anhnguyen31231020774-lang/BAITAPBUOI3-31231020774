// Exercise 10.10 – jqXHR handling
$(function () {
    $(".animLoading").hide();
    $("#consume").on("click", function () {
        var url = "https://www.randyconnolly.com/funwebdev/services/travel/cities.php";
        $(".animLoading").show();
        $("#results").html("<ul></ul>");
        $.get(url)
            .done(function (data) {
                $.each(data, function (index, value) {
                    $("<li></li>").text(value.name).appendTo("#results ul");
                });
            })
            .fail(function (xhr, status, error) {
                $("#results").text("Failed loading data – status=" + status + ", error=" + error);
            })
            .always(function () {
                $(".animLoading").fadeOut("slow");
            });
    });
});
