$(function() {
  $(".increment").click(function() {
    var count = parseInt($("~ .count", this).text());

    if ($(this).hasClass("up")) {
      var count = count + 1;

      $("~ .count", this).text(count);

      // $(this).document.body.addClass("green");

      var bg = document.body;
      bg.classList.add("green");
      setTimeout(function() {
        bg.classList.remove("green");
      }, 100);

      // setTimeout(function() {
      //   $(this)
      //     .parent()
      //     .parent()
      //     .parent()
      //     .removeClass("green");
      // }, 200);
    } else {
      var count = count - 1;
      $("~ .count", this).text(count);
      var bg = document.body;
      bg.classList.add("red");
      setTimeout(function() {
        bg.classList.remove("red");
      }, 100);
    }

    $(this)
      .parent()
      .addClass("bump");

    setTimeout(function() {
      $(this)
        .parent()
        .removeClass("bump");
    }, 300);
  });
});
