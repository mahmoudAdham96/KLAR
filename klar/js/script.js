$(document).ready(function () {
  $(".carousel_se_01_carousel").owlCarousel({
    items: 2,
    margin: 20,
    nav: true,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        autoplay: false,
      },
      400: {
        items: 1,
      },
      700: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
});
$(document).ready(function () {
  $(".carousel_se_02_carousel").owlCarousel({
    items: 2,
    margin: 0,
    nav: true,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        autoplay: false,
      },
      400: {
        items: 1,
      },
      700: {
        items: 1,
      },
      992: {
        items: 3,
      },
    },
  });
});
// ------------------------------------------

// var topbtn = document.getElementById('topBtn')

// window.addEventListener('scroll',function(){
//     if(document.documentElement.scrollTop>300)
//     topbtn.style.display ='block'
//     else topbtn.style.display ='none'
// })
