//  scroll down hide navbar - scroll up show navbar

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style = "top: 0; transition: 0.5s";
  } else {
    document.getElementById("nav").style = "top: -120px; transition: 0.5s";
  }
  prevScrollpos = currentScrollPos;
};

// SliderdocReady(function () {
const prevBtn = document.querySelector(".prev-Btn");
const nextBtn = document.querySelector(".next-Btn");
const sliderContainer = document.querySelector(".slider_container");
const sliderItem = document.querySelectorAll(".slider_item");
