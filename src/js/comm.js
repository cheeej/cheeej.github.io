new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  menu: "#menu",
  navigation: true,
  navigationPosition: "right",
  navigationTooltips: ["firstSlide", "secondSlide"],
  showActiveTooltip: true,
  slidesNavigation: true,
  slidesNavPosition: "top",

  css3: true,
  scrollingSpeed: 500,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  easing: "easeInOutCubic",
  easingcss3: "ease",

  continuousVertical: true,
  interlockedSlides: true,
  dragAndMove: true,
  offsetSections: true,
  resetSliders: true,
  touchSensitivity: 15,
  // normalScrollElements: "#element1",

  controlArrows: true,
});
//methods
// fullpage_api.setAllowScrolling(true);

//
//
// banner
var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide() {
  if (index < 0) {
    index = slides.length - 1;
  }

  if (index > slides.length - 1) {
    index = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }

  slides[index].style.display = "block";
  dot[index].classList.add("active");

  index++;

  setTimeout(changeSlide, 2000);
}

changeSlide();

//
//
// contect

$(document).ready(function () {
  $(".cosial-icon").hide();
});

$(window).load(function () {
  $(".cosial-icon").show();

  var githubPos = $("#github").position();
  var tistoryPos = $("#tistory").position();
  var instagramPos = $("#instagram").position();
  var mailPos = $("#mail").position();
  var imgPos = $(".me").position();

  $(".cosial-icon").css({
    position: "absolute",
    zIndex: "1",
    top: imgPos.top + 100,
    left: "47%",
  });

  setTimeout(function () {
    $("#github").animate(
      {
        top: githubPos.top + 10,
        left: githubPos.left - 10,
      },
      500
    );
  }, 250);

  setTimeout(function () {
    $("#github").animate(
      {
        top: githubPos.top,
        left: githubPos.left,
      },
      250
    );

    $("#instagram").animate(
      {
        top: instagramPos.top + 10,
        left: instagramPos.left - 3,
      },
      500
    );
  }, 500);

  setTimeout(function () {
    $("#instagram").animate(
      {
        top: instagramPos.top,
        left: instagramPos.left,
      },
      250
    );

    $("#tistory").animate(
      {
        top: tistoryPos.top + 10,
        left: tistoryPos.left + 3,
      },
      500
    );
  }, 750);

  setTimeout(function () {
    $("#tistory").animate(
      {
        top: tistoryPos.top,
        left: tistoryPos.left,
      },
      250
    );

    $("#mail").animate(
      {
        top: mailPos.top + 10,
        left: mailPos.left + 10,
      },
      500
    );
  }, 1000);

  setTimeout(function () {
    $("#mail").animate(
      {
        top: mailPos.top,
        left: mailPos.left,
      },
      250
    );
  }, 2000);
});
