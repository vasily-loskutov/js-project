const cols = document.querySelectorAll('.col')


document.addEventListener('click', (e)=>{
    const type =e.target.dataset.type;
    if(type == 'lock'){
        const node = e.target.tagName.toLowerCase() === 'i'
        ? e.target
        : e.target.children[0]
        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')
    }else if(type == 'copy'){
        copyToClickBoard(e.target.textContent)
    }
    
})

document.addEventListener('keydown', e =>{
    e.preventDefault()
    if(e.code.toLowerCase() === 'space'){
        setRandomColors()
    }
})
function copyToClickBoard(text){
   return  navigator.clipboard.writeText(text)
}

function generateRandomColor(){
    const hex = "0123456789ABCDEF";
    let color ="";
    for(let i = 0; i < 6;i++){
        color += hex[Math.floor(Math.random() * hex.length)]
    }
    return '#' + color;
}
function setRandomColors(isInitial){
    const colors = isInitial ? getColorsFromHash() : [];
    cols.forEach((col,index)=>{
        const isLocked = col.querySelector('i').classList.contains('fa-lock')
        const color = isInitial ? colors[index] ? colors[index]: chroma.random() : chroma.random();
        const text = col.querySelector('h2');
        const button = col.querySelector('button');

        if(isLocked){
            colors.push(text.textContent)
            return
        }
        if(!isInitial){
            colors.push(color)
        }
      
        text.textContent = color;
        col.style.backgroundColor = color;
      
        setTextColor(text,color)
        setTextColor(button,color)
    })
    updateColorsHash(colors)
}
function setTextColor(text,color){
    const luminance = chroma(color).luminance();
    text.style.color = luminance > 0.5 ? 'black' : "white"
}

function updateColorsHash(colors = []){
    return document.location.hash = colors.map((elem) => { return elem.toString().substring(1)}).join('-')
}
function getColorsFromHash(){
    if(document.location.hash.length > 1){
        return document.location.hash.substring(1).split('-').map((elem) => { return '#' + elem})
    }
    return []
}
setRandomColors(true)

