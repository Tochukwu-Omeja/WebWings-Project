let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}
window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
   document.querySelector('#search-form').classList.toggle('active')
}
document.querySelector('#close').onclick = () =>{
   document.querySelector('#search-form').classList.toggle('active')
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 150,
  centeredSlides: true,
  autoplay: {
    delay: 75000000000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});
if (window.matchMedia("(max-width: 991px)").matches) {
  swiper.params.spaceBetween = 350; // Set spaceBetween to 0 for mobile view
}




