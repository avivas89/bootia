$(window).on('load', function () {
  $('body').css('opacity', '1');
});

let offset

if (screen.width > 768){
  offset = 200
} else {
  offset = 0
}

new WOW({offset:offset, scrollContainer: null}).init()


var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//Get the button TOP
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrollWin(x, y) {
  window.scrollBy(x, y);
}

//Get the button DOWN
// var mytest = document.getElementById("mydemo");

// When the user scrolls down 20px from the top of the document, show the button
// window.scroll = function() {scrolldFunction()};


// When the user clicks on the button, scroll to the top of the document
// function downFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }


