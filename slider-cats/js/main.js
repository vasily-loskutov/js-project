const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector('#btnNext');

// индекс слайда
let nextIndex = 0;
sliderItems.forEach(function(slide){
       
        slide.addEventListener('click',function(){
            showSlide();

        })

}); 

btnNext.addEventListener('click',function(){
    showSlide();
});

btnPrev.addEventListener('click',function(){
    showSlide();
});

function showSlide(){
    sliderItems.forEach(function(slide){
        slide.classList.add('hidden');
    });
        // находим след слайд
        nextIndex += 1;
        // если index слайда < 0
        if(nextIndex < 0) nextIndex = sliderItems.length - 1;
         // если index слайда >= sliderItems.length
        if(nextIndex == sliderItems.length) nextIndex = 0;
        // отображаем нужный
        sliderItems[nextIndex].classList.remove('hidden');
}
