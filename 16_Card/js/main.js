$(document).ready(function () {
  var $inp = $(".input-cart-number");
  var $ccv = $("#card-ccv");
  var $ccvDiv = $(".ccv div");
  var $cardBox = $(".credit-card-box");

  $inp.on("input", function (e) {
    var $val = $(this).val(); // 121
    var $length = $val.length;
    var $maxLength = $(this).attr("maxlength");

    if ($length == $maxLength) {
      $(this).next().focus();
    }

    var $idx = $(this).index(); // 3

    $(`.number span:nth-child(${$idx})`).html($val);
  });

  $ccv.on("focus", function () {
    $cardBox.addClass("hover");
  });

  $ccv.on("input", function () {
    var $val = $(this).val();

    $ccvDiv.html($val);
  });

  $ccv.on("blur", function () {
    $cardBox.removeClass("hover");
  });
});
