let transform =0
let activeTeamSlide = 0

const teamNextBtn  =document.querySelector('.teamNextBtn') 
const teamPrevBtn  =document.querySelector('.teamPrevBtn') 
const teamSlides = document.querySelectorAll('.teamSlide')
let totalSlides= teamSlides.length -1


const teamData =[
    {
        teamMemberName:"Keith Mitchell",
        teamMemberDesignation:"Senior Manager-Engagement & Leisure Services",
        teamMemberDetail:"Lorem ipsum dolor sit amet, consetetur sipscing elitr, sed diam nonumy rmod tempor invidunt ut labore...",
        teamMemberEmail:"paul.holmes@neom.com",
        teamMemberCell:"+966 545954633"
    },
    {
        teamMemberName:"Futon Rambo",
        teamMemberDesignation:"Business Specialist",
        teamMemberDetail:"Lorem ipsum dolor sit amet, consetetur sipscing elitr, sed diam nonumy rmod tempor invidunt ut labore...",
        teamMemberEmail:"paul.holmes@neom.com",
        teamMemberCell:"+966 545954633"
    },
    {
        teamMemberName:"Darren Hollywood",
        teamMemberDesignation:"Senior Community Manager",
        teamMemberDetail:"Lorem ipsum dolor sit amet, consetetur sipscing elitr, sed diam nonumy rmod tempor invidunt ut labore...",
        teamMemberEmail:"paul.holmes@neom.com",
        teamMemberCell:"+966 545954633"
    },
    {
        teamMemberName:"Keith Mitchell",
        teamMemberDesignation:"Senior Manager-Engagement & Leisure Services",
        teamMemberDetail:"Lorem ipsum dolor sit amet, consetetur sipscing elitr, sed diam nonumy rmod tempor invidunt ut labore...",
        teamMemberEmail:"paul.holmes@neom.com",
        teamMemberCell:"+966 545954633"
    },

]    
const teamMemberName = document.getElementById('teamMemberName')
const teamMemberDesignation = document.getElementById('teamMemberDesignation')
const teamMemberDetail = document.getElementById('teamMemberDetail')
const teamMemberEmail = document.getElementById('teamMemberEmail')
const teamMemberCell = document.getElementById('teamMemberCell')



    const handleActiveSlide =()=>{
         

        teamSlides.forEach((slide,index)=>{
            
            if(index== activeTeamSlide){
              
                slide.classList.add('active')
            }else{
                slide.classList.remove('active')

            }
            slide.style.transform= `translateX(-${transform}px)`
        })
        teamMemberName.innerText = teamData[activeTeamSlide].teamMemberName
        teamMemberDesignation.innerText = teamData[activeTeamSlide].teamMemberDesignation
        teamMemberDetail.innerText = teamData[activeTeamSlide].teamMemberDetail
        teamMemberEmail.innerText = teamData[activeTeamSlide].teamMemberEmail
        teamMemberCell.innerText = teamData[activeTeamSlide].teamMemberCell
        
    }
    const handleBtnsDisable =()=>{
        if(activeTeamSlide == 0 ){
            teamPrevBtn.classList.add('disable')
        }else{
            teamPrevBtn.classList.remove('disable')

        }
        if(totalSlides == activeTeamSlide ){
            teamNextBtn.classList.add('disable')
        }else{
            teamNextBtn.classList.remove('disable')

        }
    }
    const handleSlide=(selectedSlideNumber)=>{
        
            activeTeamSlide =selectedSlideNumber ? selectedSlideNumber : activeTeamSlide
            let slideSize = isDesktop? window.innerWidth /100 *  16.6666666667 : window.innerWidth /100 *   37.4358974359
            transform= slideSize * activeTeamSlide
        handleActiveSlide()
        handleBtnsDisable()
      }


      const handlePrevBtn =()=>{
        if(activeTeamSlide != 0){
            activeTeamSlide--
            handleSlide()
        }
      }
      const handleNextBtn =()=>{
        if(activeTeamSlide != totalSlides){
            activeTeamSlide++
            handleSlide()
        }
      }
      teamSlides.forEach((slide,index)=>slide.addEventListener('click',()=> handleSlide(index)))
      teamPrevBtn.addEventListener('click',handlePrevBtn)
      teamNextBtn.addEventListener('click',handleNextBtn)