const btnsAccordion = document.querySelectorAll('[data-name="accordeon-title"]');
const listContents = document.querySelectorAll('.list-content');



// ПОКАЗЫВАЕТ ТОЛЬКО ОДИН list-content
btnsAccordion.forEach(function(item){
        item.addEventListener('click',function(){
            //  соседний элемент list-content
            const listContent = item.nextElementSibling;
            // скрыть все элементы 
            listContents.forEach(function(item){
                item.classList.add('hidden');
            })
            // показать нужный элемент
            listContent.classList.remove('hidden');
        })
})


// ПОКАЗЫВАЕТ НЕСКОЛЬКО list-content
// btnsAccordion.forEach((btn)=>{
//     btn.addEventListener('click',showContent)
   
// });
// function showContent(){
//         this.nextElementSibling.classList.toggle('hidden');
// }
