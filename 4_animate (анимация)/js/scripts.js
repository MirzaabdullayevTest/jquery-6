$(document).ready(function () {
  $(".item .answer").slideUp();

  $(".item .ask").click(function () {
    var $answ = $(this).parent().find(".answer");
    $answ.slideDown();

    $answ
      .animate(
        {
          height: "500px",
          width: "500px",
          borderRadius: "50%",
          opacity: 0.5,
        },
        3000
      )
      .animate({
        width: "800px",
        borderRadius: "10%",
        //   backgroundColor: "rgb(15,85,60)",
      })
      .css({ "background-color": "red", color: "yellow" });
  });
});
