const sliders = document.querySelectorAll('.slide')

sliders.forEach((slide)=>{
    slide.addEventListener('click',()=>{
        clearActuveClasses()
        slide.classList.toggle('active')
    })
})

function clearActuveClasses(){
    sliders.forEach((slide)=>{
        
            slide.classList.remove('active')
       
       
    })
}
