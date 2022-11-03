const form = document.querySelector('.js-form');
const formInputs = document.querySelectorAll('.js-input');
const inputEmail = document.querySelector('.js-input-email');
const inputPhone = document.querySelector('.js-input-phone');
const inputCheckbox =document.querySelector('.js-input-checkbox');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputPhone);

function validateEmail(email){
        let re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        return re.test(String(email).toLowerCase());
}
function validateCounty(country){
      let re = /.co$/;
      return re.test(String(country).toLowerCase());
}
function validatePhone(phone){
        let re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        
        return re.test(String(phone).toLowerCase());
  }

form.onsubmit = function(){
        const emailVal =  inputEmail.value;
        const phoneVal = inputPhone.value;
        let emptyInputs = Array.from(formInputs).filter(input =>input.value === '');

        formInputs.forEach(function(input){
                if(input.value === ''){
                        input.classList.add('error');
                        
                        
                }else{
                        input.classList.remove('error');
                }
        });
        if(emptyInputs.length !== 0){
                console.log('inputs not field');
                return false
        }
        if(validateCounty(emailVal)){
                console.log('email from Columbia');
                inputEmail.classList.add('error');
                return false;
        }else{
                inputEmail.classList.remove('error');
        }
        if(!validateEmail(emailVal)){
                console.log('email not valid!');
                inputEmail.classList.add('error');
                return false;
        }else{
                inputEmail.classList.remove('error');
        }
        if(!validatePhone(phoneVal)){
                console.log('phone not valid!');
                inputPhone.classList.add('error');
                return false;
        }else{
                inputPhone.classList.remove('error');
        }

        if(!inputCheckbox.checked){
                console.log('checkbox not checked');
                inputCheckbox.classList.add('error');
                return false;

        }else{
                inputCheckbox.classList.remove('error');
        }

        
}
