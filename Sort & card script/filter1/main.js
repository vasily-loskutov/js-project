function app(){
    const buttons = document.querySelectorAll('.button');
    const cards = document.querySelectorAll('.card');


    function filter(category,items){
        items.forEach((item) => {
            const isItemFilted = !item.classList.contains(category);
            const isShowAll = category.toLowerCase() === 'all';
            
            if(isItemFilted && !isShowAll){
                item.classList.add('hide');
            } else{
                item.classList.remove('hide');
            }
        });
    };

    buttons.forEach((button)=>{
        button.addEventListener('click',()=>{
            const currentCategory = button.dataset.filter;
            filter(currentCategory,cards);
            
        });
    });

}
app()
