$(document).ready(function () {
  var showHeaderAt = 150;

  var win = $(window),
    body = $("body");
    header = $(".tl_mm-header");

  // Show the fixed header only on larger screen devices

  if (win.width() > 400) {
    // When we scroll more than 150px down, we set the
    // "fixed" class on the body element.

    win.on("scroll", function (e) {
      if (win.scrollTop() > showHeaderAt) {
        body.addClass("fixed");
        header.addClass("header-active");
      } else {
        body.removeClass("fixed");
        header.removeClass("header-active");
      }
    });
  }
});



$('.tl_mm-header__menu-title').hover(function(){
  if ($(this).find('.tl_mm-header-submenu__main-container').length != 0) {
      $('.tl_mm-header-submenu').show();
  }
}, function(){
  $('.tl_mm-header-submenu').hide();
});

function menuClick(){
  var menu = document.getElementById('mobileSubmenu');

}

// MOBILE MENU CLICK

 function menuClick () {
    $("#mobileSubmenu").toggle();
  };
// MOBILE MENU CLICK

  // website loader
  window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) {
        loader.style.display = 'none';
      }
    }, 3000);
  });
  // website loader

// BANNER SLIDER
let activeSlide = 0;
const slides = document.querySelectorAll('.tl_mm-banner__slide');

let left = document.querySelector('#click-left');

left.onclick = function() {
  updatePrevSlide()
}


let right = document.querySelector('#click-right');

right.onclick = function() {
  updateNextSlide();
}

function updateNextSlide() {
  slides[activeSlide].classList.add("prev");
  let nextSlide = ( activeSlide < slides.length -1) ? activeSlide+1 : 0; 
  slides[nextSlide].classList.remove("prev");
  slides[nextSlide].classList.remove("next");
  slides[nextSlide].classList.add("active");
  
  if(nextSlide < slides.length -1){
    slides[nextSlide+1].classList.add("next");
    slides[nextSlide+1].classList.remove("prev");
  }  
  else {
    slides[0].classList.remove("prev");
    slides[0].classList.add("next");
  }
  activeSlide = nextSlide;
}


function updatePrevSlide() {
  slides[activeSlide].classList.add("next");
  let prevSlide = ( activeSlide > 0) ? activeSlide-1 : slides.length-1; 
  slides[prevSlide].classList.remove("next");
  slides[prevSlide].classList.remove("prev");
  slides[prevSlide].classList.add("active");
  
  if(prevSlide > 0){
     slides[prevSlide-1].classList.add("prev");
    slides[prevSlide-1].classList.remove("next");
  }
  else {
     slides[slides.length-1].classList.remove("next");
    slides[slides.length-1].classList.add("prev");   
  }
  
  activeSlide = prevSlide;
}
// BANNER SLIDER