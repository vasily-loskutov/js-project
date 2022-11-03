
const cartWrapper = document.querySelector('.cart-wrapper');


//отслеживаем клик по странице 
window.addEventListener('click',function(event){
        //Проверяем что бы клик был совершен по кнопке Добавить в корзину
        if(event.target.hasAttribute('data-cart')){
            //Находим карточку товара по которой был клик
           const card =  event.target.closest('.card');

           const productInfo = {
                id:card.dataset.id,
                imgSrc:card.querySelector('.product-img').getAttribute('src'),
                title:card.querySelector('.item-title').innerText,
                itemsInBox:card.querySelector('[data-items-in-box]').innerText,
                weight:card.querySelector('.price__weight').innerText,
                price:card.querySelector('.price__currency').innerText,
                counter:card.querySelector('[data-counter]').innerText,
           };

           //Проверяем есть ли в корзине такой товар
           const itemInCart = cartWrapper.querySelector(`[data-id ="${productInfo.id}"]`);
           
           //Если есть такой товар в корзине
           if(itemInCart){
                const counterElement = itemInCart.querySelector('[data-counter]');
                counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter)
          //Если товара в корзине нет то добавить его в корзину
           }else{

           
           //Собранные данные подставляем в шаблон
           const cartItmeHTML =`<div class="cart-item" data-id="${productInfo.id}">
           <div class="cart-item__top">
               <div class="cart-item__img">
                   <img src=${productInfo.imgSrc} alt="${productInfo.title}">
               </div>
               <div class="cart-item__desc">
                   <div class="cart-item__title">${productInfo.title}</div>
                   <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

                   <!-- cart-item__details -->
                   <div class="cart-item__details">

                       <div class="items items--small counter-wrapper">
                           <div class="items__control" data-action="minus">-</div>
                           <div class="items__current" data-counter="">${productInfo.counter}</div>
                           <div class="items__control" data-action="plus">+</div>
                       </div>

                       <div class="price">
                           <div class="price__currency">${productInfo.price}</div>
                       </div>

                   </div>`;
            // отобразим товар в корзине
            cartWrapper.insertAdjacentHTML('beforeend',cartItmeHTML);

        }
        //Сбрпасываем счетчик при добавлении товара
        card.querySelector('[data-counter]').innerText = '1';
        //Отображение статус корзины Пустая/Полная
        toggleCartStatus();
        //подсчет общей цены
        calcCartPriceAndDelivery();
    }

})
