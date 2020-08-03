function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.querySelector("#main").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector("#main").style.display = "none";
}

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
      $(".navTransparent").css("background", "rgba(63, 15, 117, 0.85)");
    } else {
      $(".navTransparent").css("background", "rgba(63, 15, 117, 0.15)");
    }
  });
});

$(document).keydown(function (e) {
  if (e.keyCode == 27) {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector("#main").style.display = "none";
  }
});
