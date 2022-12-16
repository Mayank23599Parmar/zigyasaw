import Swiper from "./vendor/swiper";
var swiper = new Swiper(".collection-feature-slider-wrapper", {
  slidesPerView: 1,
  height: "auto",
  // effect: "fade",
  spaceBetween: 60,
  centeredSlides: true,
  initialSlide: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
      initialSlide: 3,
    },
  },
});
