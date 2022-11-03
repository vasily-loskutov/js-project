function calcCartPriceAndDelivery(){
  const cartWrapper = document.querySelector('.cart-wrapper');
   const cartItems = cartWrapper.querySelectorAll('.cart-item'); 
   const totalPriceEL = document.querySelector('.total-price');
   const deliveryCost = document.querySelector('.delivery-cost');
   const cartDelivery = document.querySelector('[data-cart-delivery]');

   let totalPrice = 0;
   cartItems.forEach(function(item){
        const amountEl = item.querySelector('[data-counter]');
        const priceEL = item.querySelector('.price__currency');
        const currentPrice = parseInt(amountEl.innerText) *  parseInt(priceEL.innerText);
        totalPrice +=currentPrice;
   });
   //отображаем общую цену
   totalPriceEL.innerText=totalPrice;
   
   if(totalPrice > 0){
       cartDelivery.classList.remove('none');
   }else{
       cartDelivery.classList.add('none');
   }

  if(totalPrice >=600){
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
  }else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerHTML = '250 ₽';
  }
  }


