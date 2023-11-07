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
