const tabs = document.querySelector(".tabs")


const btn = document.querySelectorAll(".button")

const articles = document.querySelectorAll(".content")

const tabSidebar = document.getElementById('tabSidebar')

const goBackToTabList =()=>{
    tabSidebar.classList.remove('hidden')
    articles.forEach(article=>article.classList.remove('live'))
    window.location.hash =''

}

tabs.addEventListener("click", (e) => { 
    
    const id = e.target.dataset.id
    
    if (id) {
        window.location.hash = id
        if(!isDesktop){
            tabSidebar.classList.add('hidden')
        }

        btn.forEach((btn) => {
            btn.classList.remove("live")

        })

        
        e.target.classList.add("live")
        articles.forEach((article) => {

            article.classList.remove("live")


        });
        const element = document.getElementById(id)
     
        element.classList.add("live")

    }

})
if(window.location.hash){
    const id = window.location.hash.replace('#',"") 
    if (id) {
        window.location.hash = id
        if(!isDesktop){
            tabSidebar.classList.add('hidden')
        }

        btn.forEach((btn) => {
            if(btn.dataset.id==id){
            btn.classList.add("live")

            }else{
            btn.classList.remove("live")

            }
        })

         
        articles.forEach((article) => {

            article.classList.remove("live")


        });
        const element = document.getElementById(id)
     
        element.classList.add("live")

    }
}

const smallImage = document.querySelectorAll("#smImg-main div img") 
const MainImage = document.getElementById("mainImg")
const mainImgDialog = document.getElementById("mainImgDialog")
 
smallImage.forEach((img)=>{
    
img.addEventListener("click",(()=>{
    if(img.classList.contains('videoItem')){ 
        mainImgDialog.href= img.dataset.videoSource
        mainImgDialog.classList.add('videoItem')
      
    }else{
    mainImgDialog.href= img.dataset.bigImg
    mainImgDialog.classList.remove('videoItem')

    } 
    MainImage.src = img.dataset.bigImg
    refreshFsLightbox();
}))
})




const ratingStars =document.querySelectorAll('.ratingStar')

const settingRatings =(selectedIndex)=>{
    ratingStars.forEach((item,index)=>{
        if(index <= selectedIndex){
           item.classList.add('active')
        }else{
            item.classList.remove('active')
        }
    })
}

ratingStars.forEach((ratingStar,index)=>ratingStar.addEventListener('click',()=>settingRatings(index)))










