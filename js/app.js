//  scroll down hide navbar - scroll up show navbar

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style = "top: 0; transition: 0.5s";
    // document.getElementById("nav").style.transition = "0.5s";
    console.log("scrolling up");
  } else {
    document.getElementById("nav").style = "top: -120px; transition: 0.5s";
    // document.getElementById("nav").style.transition = "0.5s";
    // document.getElementById("nav").style.top = "-120px";
    // document.getElementById("nav").style.transition = "0.5s";
    console.log("scrolling down");
  }
  prevScrollpos = currentScrollPos;
};
