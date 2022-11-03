const modalBtns = document.querySelectorAll('[data-modal-button]');
const closeBtns = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');
// Кнопки открыть модальное окно
modalBtns.forEach(function(modalBtn){
        modalBtn.addEventListener('click',function(){
            const modalId = this.dataset.modalButton;
            const modalWindow = document.querySelector(`#${modalId}`);
            modalWindow.classList.remove('hidden');

            // Находим в нутри модального окна modal-window и запрещаем передовать клики "наверх"
            modalWindow.querySelector('.modal-window').addEventListener('click',function(event){
                event.stopPropagation();
            })
        })
})
// Кнопки закрыть модальное окно
closeBtns.forEach(function(item){
    item.addEventListener('click',function(){
       const modal =  this.closest('[data-modal]');
       modal.classList.add('hidden');
    })
})
// Закрытие модалок по fade
allModals.forEach(function(item){
    item.addEventListener('click',function(){
       const modal =  this.closest('[data-modal]');
       this.classList.add('hidden');

    })
})
