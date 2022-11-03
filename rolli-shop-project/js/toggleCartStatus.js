function toggleCartStatus(){
    const cartWrapper = document.querySelector('.cart-wrapper');

   const CartEmptyBadge = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');
    if(cartWrapper.children.length > 0){
        CartEmptyBadge.classList.add('none');
        orderForm.classList.remove('none');

    }else{
        CartEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');
    }

    
}
