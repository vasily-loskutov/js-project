const inputs = document.querySelectorAll('.input');
const inputPhoto = document.querySelector('.input__img-card');
const inputName = document.querySelector('.input__name-card');
const inputDesc = document.querySelector('.input__desc-card');
const inputPopularity = document.querySelector('.input__populatity-card');
const inputPrice = document.querySelector('.input__price-card');
const createBtn = document.querySelector('.btn-create-card');
const cards = document.querySelector('.cards');
const filterBtns = document.querySelectorAll('.btn');
//Список параметров всех товаров
let Cards = [];
//Проверка есть ли в Local Storage что нибудь
if(localStorage.getItem('all-cards')){
    // если есть то добавляем в список
    Cards = JSON.parse(localStorage.getItem('all-cards'));
}
//создаем каротчки товара по параметрам из списка 
Cards.forEach((card)=>{
    creatingCards(card);
});
//добавляем к списку всех товаров параметры каротчки
function pushToCards(){
   
    let cardParametr = {};
    createBtn.addEventListener('click', ()=>{
        //проверяем не пустой ли импут
         let argumentNotFlase = [inputPhoto.value,inputName.value,inputDesc.value,inputPopularity.value,inputPrice.value];
         for(let i of argumentNotFlase){
            if(i == '') return
         }
         //добавляем параметры из инпутов
        cardParametr.photo = inputPhoto.value;
        cardParametr.name = inputName.value;
        cardParametr.desc = inputDesc.value;
        cardParametr.popularity = inputPopularity.value;
        cardParametr.price = inputPrice.value;
    //очищаем инпуты 
    inputs.forEach((input)=>{
        input.value = '';
    })
       // добавляем в список товаров параметры каждой карточки
       Cards.push(cardParametr);
       //выводим каротчку товара в html
       creatingCards(cardParametr);

       saveToLocalStorage();
       //обнуляем параметры карточки товара
       cardParametr = {};
})

  }

function creatingCards(card){
        
        let CreatingCard = document.createElement('div');
        CreatingCard.className = 'card';
        CreatingCard.innerHTML = `
        <div class="info-card">
        <img src="${card.photo}" alt="" class="input__img-card">
            <h1 class="card__name">${card.name}</h1>
            <p class="card__desc">${card.desc}</p>
            <p class="card__popularity">${card.popularity}/10</p>
            <p class="card__price">${card.price}руб.</p>
        </div>
    `;
  
    cards.appendChild(CreatingCard);

}
//кнопки фильтрации
filterBtns.forEach((filterBtn)=>{

    filterBtn.addEventListener('click',()=>{
        //вызываем фильтр и передаём в category критерии фильтрации
        let category = filterBtn.dataset.filter;
        filter(category,Cards);
    })
})


function filter(category,cards){
    

    switch(category){
        case "priceUp":
            cards.sort(function(a,b){
                return b.price - a.price;
            })
            sortedCarts(cards);
            break;
       case "priceDown":
        cards.sort(function(a,b){
            return a.price - b.price;
        })
        sortedCarts(cards);
           break;
        case "popylarityUp":
       cards.sort(function(a,b){
           return b.popularity - a.popularity;
       })
       sortedCarts(cards);
       break;

       case "popylarityDown":
        cards.sort(function(a,b){
            return a.popularity - b.popularity;
        })
        sortedCarts(cards);
        break;
    } 
    
}

function sortedCarts(cardList){
    cards.innerHTML = '';
    for(let i of cardList){
        creatingCards(i)
        saveToLocalStorage();
    }

}
function saveToLocalStorage(){
        localStorage.setItem('all-cards',JSON.stringify(Cards))
}
pushToCards();
