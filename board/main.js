const board = document.querySelector('#board');
const SQUARE_NUMBER =  600;

for(let i = 0;i<SQUARE_NUMBER;i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover',(e)=>{
        const color = chroma.random()
        e.target.style.background = color
        e.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    })
    square.addEventListener('mouseleave',(e)=>{
        e.target.style.background = '#1d1d1d1d'
        e.target.style.boxShadow = `0 0 2px #000`
    })
    board.append(square)
}

