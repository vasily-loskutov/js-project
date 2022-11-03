


document.querySelector('#card-number').oninput = function(){
    let cardNum = this.value;
    if(cardNum.trim().length > 5){
        var cardInfo = new CardInfo(cardNum.trim(), {
            banksLogosPath: "./card-info/card-info-master/dist/banks-logos/",
            brandsLogosPath:"./card-info/card-info-master/dist/brands-logos/"
        });
        console.log(cardInfo.bankName)
        console.log(cardInfo.bankLogo)
        console.log(cardInfo.brandLogo)
        console.log(cardInfo.backgroundColor)
 
        document.querySelector('.card-image').src = cardInfo.bankLogo;
        document.querySelector('.card-logo').src = cardInfo.brandLogo;
        document.querySelector('.card-front').style.backgroundColor = cardInfo.backgroundColor;
    }
   
}

// 402312
