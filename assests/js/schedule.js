const openScheduleDropdown =(selected)=>{
    let dropDown =
    selected.parentElement.parentElement.querySelector('ul')
    
    dropDown.classList.add('max-h-[300px]')
    dropDown.classList.remove('max-h-[0px]')
}

const closeScheduleDropdown =(selected)=>{
    let dropDown =
    selected
     
    dropDown.classList.add('max-h-[0px]')
    dropDown.classList.remove('max-h-[300px]')
}




const scheduleDropdownLists = document.querySelectorAll('.scheduleDropdownList')
const changeScheduleDropdownValue=(selectedList,text)=>{
    selectedList.parentElement.parentElement.querySelector('.dropdownValue').innerText = text
    closeScheduleDropdown(selectedList)

}
scheduleDropdownLists.forEach(scheduleDropdownList=>{
    scheduleDropdownList.querySelectorAll('li').forEach(listItem=>{
        listItem.addEventListener('click',()=> changeScheduleDropdownValue (scheduleDropdownList,listItem.innerText))
    })
})
