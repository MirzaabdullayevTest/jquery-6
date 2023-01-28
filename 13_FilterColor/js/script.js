$(document).ready(function () {
  var $color = $(".color");

  $(".f-red").click(function () {
    cb(".red");
  });

  $(".f-green").click(function () {
    cb(".green");
  });

  $(".f-blue").click(function () {
    cb(".blue");
  });

  function cb(color) {
    var $filtered = $color.filter(color);

    $color.slideDown();
    $color.not($filtered).slideUp();
  }
});
