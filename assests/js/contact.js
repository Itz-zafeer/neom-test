const openContactDropdown=(selected)=>{
    let dropDown =
    selected.parentElement.parentElement.querySelector('ul')
    
    dropDown.classList.add('max-h-[300px]')
    dropDown.classList.remove('max-h-[0px]')
}
const closeContactDropdown =(selected)=>{
    let dropDown =
    selected
     
    dropDown.classList.add('max-h-[0px]')
    dropDown.classList.remove('max-h-[300px]')
}

const contactDropdownList = document.querySelector('.contactDropdownList')
const changeContactDropdownValue=(selectedList,text)=>{
    selectedList.parentElement.parentElement.querySelector('.dropdownValue').innerText = text
    closeContactDropdown(selectedList)

}

contactDropdownList.querySelectorAll('li').forEach(listItem=>{
    listItem.addEventListener('click',()=> changeContactDropdownValue (contactDropdownList,listItem.innerText))
})

const handleSubmit =(e)=>{
    e.preventDefault()
    const inputs = document.querySelectorAll('.inputRequired')
    let isdropdownValue = document.querySelector('form .dropdownValue')
    
    if(isdropdownValue.innerText == "Select"){
        let errorSpan=   isdropdownValue.parentElement.parentElement.parentElement.querySelector('.error')
        errorSpan.classList.add('active')
        setTimeout(()=>{
            errorSpan.classList.remove('active')
        },8000)
    }
    inputs.forEach((input,index)=>{
        if(!input.value){
            let errorSpan=   input.parentElement.parentElement.parentElement.querySelector('.error')
                errorSpan.classList.add('active')
                setTimeout(()=>{
                    errorSpan.classList.remove('active')
                },8000)
        }
    })
}

document.getElementById('contactForm').addEventListener('submit',handleSubmit)