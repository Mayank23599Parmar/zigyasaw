import Swiper from './vendor/swiper';
var swiper = new Swiper(".collection-slider-wrapper", {
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });