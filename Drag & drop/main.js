const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart',dragStart)
item.addEventListener('dragend',dragEnd)

placeholders.forEach((elem)=>{
   elem.addEventListener('dragover',dragover)
   elem.addEventListener('dragenter',dragenter)
   elem.addEventListener('dragleave',dragleave)
   elem.addEventListener('drop',drop)
})

function dragStart(e){
    e.target.classList.add('hold')
    setTimeout(()=> e.target.classList.add('hide'),0)
   

}
function dragEnd(e){
    e.target.classList.remove('hold','hide')
}

function dragover(e){
    e.preventDefault();

}
function dragenter(e){
    e.target.classList.add('hovered')

}
function dragleave(e){
    e.target.classList.remove('hovered')
    
}
function drop(e){
    e.target.append(item)
    e.target.classList.remove('hovered')
}
