$(document).ready(function () {
  var $bigImg = $("#big img");
  
  $("#small a").click(function (e) {
    e.preventDefault();

    var $href = $(this).attr("href");

    $bigImg.fadeOut(function () {
      $bigImg.attr("src", $href);

      $bigImg.fadeIn();
    });
  });
});
