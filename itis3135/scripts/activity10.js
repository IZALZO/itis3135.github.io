$(document).ready(function () {

    // preload the image for each link
    $("#image_list a").each(function () {
            var swappedImage = new Image();
            swappedImage.src = $(this).attr("href");
    });

    // set up event handlers for links  
    $("#image_list a").click(function (evt) {

            // get the image URL and caption for each image and animate the caption

            var imageURL = $(this).attr("href");

            $("#image").attr("src", imageURL);

            var caption = $(this).attr("title");

            $("#caption").fadeOut(500, function () {

                    $("#caption").text(caption).fadeIn(500);

                    $("#caption").animate({ fontSize: "2.0em" }, 500);
            });

            $("#image").fadeOut(500, function () {

                    $("#image").attr("src", imageURL).fadeIn(500);
            });

            // cancel the default action of each link
            evt.preventDefault();

    }); // end click

    // move the focus to the first link
    $("li:first-child a").focus();

}); // end ready