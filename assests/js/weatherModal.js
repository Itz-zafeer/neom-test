$(function () {
    $("#wModal").load("weather-modal.html"); 
  });
let maxHeightOfDropDownOfWeatherModal = isDesktop ? "max-h-[220px]" : "max-h-[130px]"
  const openWeatherModal =()=>{
      let modal = document.getElementById("weatherModal")
    modal.classList.remove('opacity-0')
    modal.classList.remove('pointer-events-none')
    modal.classList.add('opacity-1')
    modal.classList.add('pointer-events-initial')
  }
 
const closeWeatherModal=()=>{
    let modal = document.getElementById("weatherModal")
    modal.classList.add('opacity-0')
    modal.classList.add('pointer-events-none')
    modal.classList.remove('opacity-1')
    modal.classList.remove('pointer-events-initial')
    closeDropdown()
}

const closeDropdown =()=>{
    const dropdownList = document.querySelectorAll('.dropdownList')
    dropdownList.forEach(item=>{
        item.classList.remove(maxHeightOfDropDownOfWeatherModal)
        item.classList.add('max-h-[0px]')
    })
    firstVisit = false
    document.querySelectorAll('svg').forEach(icon=>icon.classList.contains('rotate-[180deg]') &&  icon.classList.remove('rotate-[180deg]'))
}

  window.addEventListener("click",(e)=>{ 
    e.target.id ==="acha bety" && closeWeatherModal()
  })

  const openDropdown =(selected)=>{
    selected.classList.add('rotate-[180deg]')
    let dropDown =
    selected.parentElement.parentElement.querySelector('ul')
    
    dropDown.classList.add(maxHeightOfDropDownOfWeatherModal)
    dropDown.classList.remove('max-h-[0px]')
}
let modalStep = 1
const changeDropdownValue =(selectedList,text)=>{ 
    selectedList.parentElement.parentElement.querySelector('.dropdownValue').innerText = text
    selectedList.parentElement.parentElement.querySelector('.dropdownValue').classList.remove('text-[#878787]')
    selectedList.parentElement.parentElement.querySelector('.dropdownValue').classList.add('text-[#000]')
    closeDropdown()
    if(modalStep == 1){
        modalStep++
        document.getElementById('modalStep2').classList.remove('opacity-[0.5]')
        document.getElementById('modalStep2').classList.remove('pointer-events-none')
    }
    if(modalStep == 2 &&  selectedList.parentElement.parentElement.id=='modalStep2'){
        modalStep++
        document.getElementById('modalStep3').classList.remove('opacity-[0.5]')
        document.getElementById('modalStep3').classList.remove('pointer-events-none')
    }
    if(modalStep == 3 &&  selectedList.parentElement.parentElement.id=='modalStep3'){
        modalStep++
        document.getElementById('modalStep4').classList.remove('hidden')

    }
}
 
const closeBtnAndShowSchdeule =()=>{
        document.getElementById('busleaving-schedule').classList.remove('hidden')
        document.getElementById('busleaving-btn').classList.add('hidden')
        closeWeatherModal()
}
setTimeout(()=>{
   
    // document.getElementById('weatheOpenerBtn').addEventListener('click',openWeatherModal)

    document.querySelectorAll('.dropdownList').forEach(list=>{
        
        list.querySelectorAll('li').forEach(listItem=>{
            listItem.addEventListener('click',()=> changeDropdownValue (list,listItem.innerText))
        })
    })
}, 1500)