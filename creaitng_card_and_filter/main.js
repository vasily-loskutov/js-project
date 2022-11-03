
const formInputs = document.querySelectorAll('.input');
const cards = document.querySelector('.container-grid');
const SortBtns = document.querySelectorAll('[data-name]');
let Cards = [];
let maxValue =0;
let minValue =0;
const input1 = document.getElementById('PriceStart');
const input2 = document.getElementById('PriceEnd');
const inputs = [input1,input2]
 // сохраняем все параметры карты в CardParametr
let formData = new FormData(form1);
const CardParametr =  Object.fromEntries(formData.entries());

// Проверяем есть ли что нибудь в localStorage
if(localStorage.getItem('all-cards')){
    // Сохраняем в Cards
    Cards = JSON.parse(localStorage.getItem('all-cards'));
}
// Отображаем все карточки что есть в Cards
Cards.forEach((card)=>{
    CreateCard(card);
})

form1.onsubmit = function(event){

    let emptyInputs = Array.from(formInputs).filter(input =>input.value === '');
    //Добавляем всем пустым input`ам класс error
    formInputs.forEach(function(input){
        if(input.value === '' &&  input.className !== 'block-button'){
            input.classList.add('error');
            
            
        }else{
            input.classList.remove('error');
        
        }
   
    })
    //Если поле пустое то не отправляем форму
    if(emptyInputs.length !== 0){
                return false
    }else{
        event.preventDefault();

      
        Cards.push(CardParametr);
        CreateCard(CardParametr);
        // очищаем все input`ты
        Array.from(formInputs).map(input =>input.value = '');
        
    }

    
    
    
    
 }

document.querySelector('#DeleteAllBtn').onclick = ()=>{
    DeleteAllCards();
    cards.innerHTML = '';
};

input1.oninput = function(){
    minValue =this.value;
    
}
input2.oninput = function(){
    maxValue =this.value;
    ShowRelativeCard(minValue,maxValue)

  
    
}





SortBtns.forEach((item)=>{
        item.addEventListener('click',function(){
            filterCards(Cards,item.dataset.name)
        })
});
function filterCards(Cards,category){
        switch(category){
            case "PopularityUp":
                Cards.sort((a,b)=>{
                    return parseInt(b.raiting) - parseInt(a.raiting) ;
                });
                pushToCards(Cards);
                saveToLocalStorage()
                break;
            case "PopularityDown":
            Cards.sort((a,b)=>{
                return parseInt(a.raiting) - parseInt(b.raiting) ;
            });
            pushToCards(Cards);
            saveToLocalStorage()
            break;
            case "PriceUp":
                Cards.sort((a,b)=>{
                    return parseInt(b.price) - parseInt(a.price) ;
                });
                pushToCards(Cards);
                saveToLocalStorage()
                break;
            case "PriceDown":
                Cards.sort((a,b)=>{
                    return parseInt(a.price) - parseInt(b.price) ;
                });
                pushToCards(Cards);
                saveToLocalStorage()
                break;



        }
}
function CreateCard(parametrs){
        let newCard = document.createElement('div');
        newCard.className = 'card';
        
        if(parametrs.relative == 'true'){
            newCard.classList.add('hidden');
        }
        if((parametrs.relative == 'false') && (newCard.classList.contains('hidden'))){
            newCard.classList.remove('hidden');
        }
        newCard.innerHTML = `
        <img src="${parametrs.URL}" alt="" class="card__img">
        <div class="card__text-block">
            <h2 class="card__title">${parametrs.title}</h2>
            <p class="card__subtitle">${parametrs.desk}</p>
            <p class="card__raiting">${parametrs.raiting}/10</p>
            <p class="card__price">${parametrs.price}<span> ₽</span></p>
        </div>
    `
       
       cards.appendChild(newCard);
       saveToLocalStorage();
    
}

// Сохраняем все в LocalStorage
function saveToLocalStorage(){
    localStorage.setItem('all-cards',JSON.stringify(Cards))
}
function DeleteAllCards(){
    localStorage.clear();
    Cards = [];
}
function pushToCards(cardsSort){
    cards.innerHTML = '';
    cardsSort.forEach((cardSort)=>{
        CreateCard(cardSort);
    })
}
// Функция определения диапозона карт
function ShowRelativeCard(minValue,maxValue){
    let SortCardNew = []
    // добавляем ключ relative
    formData.append('relative',true)
    //определяем диапазаон карт которые не надо скрывать и заполняем массив SortCardNew
    for(let card of Cards){
    if((minValue <= parseInt(card.price)) && (maxValue >= parseInt(card.price))){
        SortCardNew.push(card);
    }
   }
   //Сначала всем картам задаем true при последующих вызовах
   for(let card of Cards){
         card.relative = 'true';
   }
   //Даём нужным карточкам из массива Cards relative = 'false'
    for(let i = 0;i< Cards.length;i++){
        for(let k = 0;k<SortCardNew.length;k++){
                if(Cards[i] == SortCardNew[k]){
                    Cards[i].relative = 'false'
                }
    }
  


   }
//    удаляем из разметки все карточки
    cards.innerHTML = '';
    Cards.forEach((card)=>{
        CreateCard(card);
    })
}
