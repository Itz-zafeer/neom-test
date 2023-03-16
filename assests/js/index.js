$(function () {
  
  $("#header").load("header.html");
  $("#footer").load("footer.html");
  $("#sidebar").load("sidebar.html");
});

// document.querySelectorAll('img').forEach(img=>img.src ="https://neom-v2.vercel.app/assests/images/home/banner.jpg")

let isDesktop = window.innerWidth > 768
window.addEventListener('resize',()=>{
  isDesktop =window.innerWidth > 768
})
 

// HAMBURGER JS 


// var menu = document.querySelector(".menu").children[0]
// var spantwo = document.querySelector(".line-2")
// var spanone = document.querySelector(".line-1")
// var spanthree = document.querySelector(".line-3")




// menu.onclick = () => {
//     spantwo.classList.toggle("li2ne")
//     spanone.classList.toggle("l1ine")
//     spanthree.classList.toggle("lin3e")


// }


const swiper = new Swiper('.bannerSwiper', {
    // Optional parameters 
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    
  });

  const newsGap = window.innerWidth > 768? window.innerWidth /100 * 1.35416666667  : window.innerWidth /100 * 3.84615384615
const news = new Swiper('.newsSwiper', {
    // Optional parameters 
    autoHeight: false,
    loop: false,
    spaceBetween:newsGap ,
    
    slidesPerView: "auto",
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // If we need pagination
    
  
    
  });
 

  document.querySelectorAll('.swiper-button-lock').forEach(btn=> btn.classList.remove('swiper-button-lock'))
  document.querySelectorAll('.swiper-button-next').forEach(btn=> btn.classList.remove('swiper-button-disabled'))


 const toggleSearch =()=>{
  const searchBar = document.getElementById('searchBar')
  searchBar.classList.toggle('max-h-[500px]')
  
  searchBar.classList.contains('max-h-[500px]') && searchBarOverlay.classList.remove('pointer-events-none') 
 }
 const closeSearch =()=>{
  const searchBar = document.getElementById('searchBar')
  searchBar.classList.remove('max-h-[500px]')
  const searchBarOverlay = document.getElementById('searchBarOverlay')
  searchBarOverlay.classList.add('pointer-events-none')
 }