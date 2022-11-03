let progressBar = document.querySelector('.js-progress__line');

document.onscroll= function(){
    let progressLine = window.scrollY / (document.body.clientHeight - window.innerHeight) * 100;
    progressBar.style.width = progressLine + "%";
   
}
