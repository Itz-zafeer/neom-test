const openProfile=()=>{
    document.querySelector('.profileOuter').classList.add('hidden')
    document.querySelector('.profileInner').classList.remove('hidden')
}
const closeProfile =()=>{
    document.querySelector('.profileOuter').classList.remove('hidden')
    document.querySelector('.profileInner').classList.add('hidden')
}