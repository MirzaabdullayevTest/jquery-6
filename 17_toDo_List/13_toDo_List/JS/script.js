$(document).ready(function () {
  var $inp = $(".form-control");
  var $btn = $(".btn");
  var $list = $(".list-group");

  $btn.click(function (e) {
    var $val = $inp.val();
    $inp.val("");
    $list.append(`<li>${$val} <button class="btn-close">x</button></li>`);
  });

  
});
