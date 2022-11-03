const dropDown = document.querySelectorAll('.dropdown');


// Полифил для For Each
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function(callback,thisArg){
    thisArg = thisArg || window;
    for(var i = 0;i<this.length;i++){
      callback.call(thisArg,this[i],i,this);
    }
  };

}
console.log(555);
dropDown.forEach(function(dropDownWrapper){
        const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
        const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
        const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
        const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');

     dropDownBtn.addEventListener('click',function(){  
         dropDownList.classList.toggle('hidden');
         this.classList.add('dropdown__button--active');

});
    dropDownListItems.forEach(function(listItem){
        listItem.addEventListener('click',function(event){
         event.stopPropagation();
         dropDownBtn.innerText = this.textContent;
         dropDownBtn.focus();
         dropDownInput.value = this.dataset.value;
         dropDownList.classList.add('hidden');
        })
    });
    //  Клик с наружы dropDown
 
    document.addEventListener('click',function(event){
     if(event.target !== dropDownBtn){
         dropDownList.classList.add('hidden');
         dropDownBtn.classList.remove('dropdown__button--active');
     }
    });
 
    document.addEventListener('keydown',function(event){
     if(event.key === 'Tab' || event.key === 'Escape'){
         dropDownList.classList.add('hidden');
         dropDownBtn.classList.remove('dropdown__button--active');
     }
    });
 
});


