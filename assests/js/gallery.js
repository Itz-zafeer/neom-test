const openGallery=()=>{
    document.querySelector('.galleryOuterSection').classList.add('hidden')
    document.querySelector('.galleryInnerSection').classList.remove('hidden')
}
const closeGallery =()=>{
    document.querySelector('.galleryOuterSection').classList.remove('hidden')
    document.querySelector('.galleryInnerSection').classList.add('hidden')
}
const galleryGap = window.innerWidth /100 * 0.85416666666
const gallerySwiper = new Swiper ('.gallerySwiper',{

    loop: false,
    spaceBetween:galleryGap ,
    allowTouchMove: false,
    slidesPerView: "auto",
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
},
})