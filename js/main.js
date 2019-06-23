$(document).ready(function() {
  hideElement("nav");
  hideElement("#slide-up");

  $(".mobile-nav-button").click(function() {
    if (isElementHidden("nav")) {
      showElement("nav");
    } else {
      hideElement("nav");
    }
  });
  $("nav ul li").click(function() {
    hideElement("nav");
  });
  $(window).resize(function() {
    if (window.innerWidth > 1024 && !isElementHidden("nav")) {
      hideElement("nav");
    }
  });
  $(document).scroll(function() {
    if ($(window).scrollTop() > 400 && isElementHidden("#slide-up")) {
      showElement("#slide-up");
    } else if ($(window).scrollTop() <= 400 && !isElementHidden("#slide-up")) {
      hideElement("#slide-up");
    }
  });
});

function hideElement(name) {
  $(name).removeClass("visible");
  $(name).addClass("hidden");
}

function showElement(name) {
  $(name).removeClass("hidden");
  $(name).addClass("visible");
}

function isElementHidden(name) {
  return $(name).hasClass("hidden");
}
