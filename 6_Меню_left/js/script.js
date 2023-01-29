$(document).ready(function () {
  $(".show_hide-menu").click(function () {
    var $left = $(".menu").css("left"); // -300 // 0
    var $icon = $(".fa.fa-sign-in");

    if ($left === "-300px") {
      $icon.css({ transform: "rotate(180deg)", transition: "1s" });

      $(".menu").animate(
        {
          left: 0,
        },
        1000
      );
    } else {
      $icon.css({ transform: "rotate(0deg)", transition: "1s" });
      $(".menu").animate(
        {
          left: -300,
        },
        1000
      );
    }
  });
});
