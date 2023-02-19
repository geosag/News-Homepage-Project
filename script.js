$(document).ready(function () {
  $(".nav-toggle").click(function () {
    $("nav").addClass("activated").toggleClass("active");
    $(".nav-toggle").toggleClass("active-nav-button");
  });
});

$(window).on("resize", function () {
  if (Modernizr.mq("(min-width:1050px)")) $("nav").removeClass("activated");
  if (Modernizr.mq("(max-width:747px)")) {
    $(".main-img").attr("src", "./images/image-web-3-mobile.jpg");
  } else {
    $(".main-img").attr("src", "./images/image-web-3-desktop.jpg");
  }
});
