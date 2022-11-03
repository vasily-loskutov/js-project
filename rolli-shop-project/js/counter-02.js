

//добавляем прослушку на всём окне
window.addEventListener('click',function(event){

    let counter;
  // кдик по кнопкам + или - 
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
    //нахдоим обёртку счетчика 
    const counterWrapper = event.target.closest('.counter-wrapper');
    //находим счётчик
     counter = counterWrapper.querySelector('[data-counter]');
    }
         //проверка элемента 
     if(event.target.dataset.action === 'plus'){
        //увеличиваем на 1
           counter.innerText =  ++counter.innerText ;
   }
    //проверка элемента
        if(event.target.dataset.action === 'minus'){

                
            
            if(parseInt(counter.innerText)>1){
                //уменьшаем на 1
                counter.innerText =  --counter.innerText ;
                //Проверка на товар который находится в корзине
            }else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
     
                //Удаляем товар из корзины
                event.target.closest('.cart-item').remove();

                toggleCartStatus();
                calcCartPriceAndDelivery();
            }

        }
          //Проверяем клик по + или -
          if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
            calcCartPriceAndDelivery();
       }
     

       
});
