const btn = document.querySelector('#button');
const content = document.querySelector('#content')

btn.addEventListener('click',()=>{
    btn.textContent = content.classList.toggle('content-hidden') ? btn.textContent = 'Открыть блок' : btn.textContent = 'Закрыть блок';
})
