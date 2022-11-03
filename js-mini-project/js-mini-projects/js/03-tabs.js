const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');
tabHeaders.forEach((item)=>{
        item.addEventListener('click',function(){
          
            // скрыть все contentBox
            contentBoxes.forEach(function(box){
                box.classList.add('hidden');
            });
            // показать нужный contentBox
            const contentBox = document.querySelector(`#${this.dataset.tab}`);
            contentBox.classList.remove('hidden');
        })
})
