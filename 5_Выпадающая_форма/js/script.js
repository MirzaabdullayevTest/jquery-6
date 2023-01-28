$(document).ready(function () {
  var $input = $(".search");
  var $close = $("#close");
  var $btn = $("#search");

  $close.click(function () {
    $input.animate(
      {
        top: "-150",
      },
      1000
    );
  });

  $btn.click(function () {
    $input.animate(
      {
        top: "0",
      },
      1000
    );
  });
});
