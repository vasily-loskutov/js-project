
//находим элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

//отслеживаем btnMinus
btnMinus.addEventListener('click',function(){
    //Проверяем что бы счетчик был больше 1
    if(parseInt(counter.innerText)>1){
        //уменьшаем на 1
        counter.innerText =  --counter.innerText ;
    }
    
});
//отслеживаем btnPlus
btnPlus.addEventListener('click',function(){
     //увеличиваем на 1
    counter.innerText =  ++counter.innerText ;
});
