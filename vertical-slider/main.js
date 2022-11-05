const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar')
const slides = document.querySelector('.main-slide');
const container = document.querySelector('.container')
const Countslide = slides.querySelectorAll('div').length;
let activeSlideIndex = 0
sidebar.style.top = `-${Countslide-1}00vh`


upBtn.addEventListener('click',()=>{
    changeSlides('up')
})
downBtn.addEventListener('click',()=>{
    changeSlides('down')
})
    


function changeSlides(diretcion){
    if(diretcion === 'up'){
        activeSlideIndex++
        if(activeSlideIndex === Countslide){
            activeSlideIndex = 0
        }
    }else if(diretcion === 'down'){
            activeSlideIndex--
            if(activeSlideIndex < 0 ){
                activeSlideIndex = Countslide -1
            }
    }
    const height = container.clientHeight
    slides.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
