$(document).ready(function () {
    $("#button1").click(function () {
      var my_button = $("#face");
      my_button.animate(
        { left: "-=2px", top: "-=2px", opacity: "1" },
        "slow"
      );
      my_button.animate({ opacity: "0" });
      my_button.animate({ left: "+=2px", top: "+=2px", opacity: "0" });
    });
  });