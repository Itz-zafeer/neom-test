const openDirected=()=>{
    document.querySelector('.directedOuter').classList.add('hidden')
    document.querySelector('.directedInner').classList.remove('hidden')
}
const closeDirected =()=>{
    document.querySelector('.directedOuter').classList.remove('hidden')
    document.querySelector('.directedInner').classList.add('hidden')
}