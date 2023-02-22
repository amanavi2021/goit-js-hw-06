const input = document.querySelector('#validation-input');
input.classList.add('invalid');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const currentLength = event.currentTarget.value.length;
    const requiredLength = Number(event.currentTarget.getAttribute('data-length'));

    if (currentLength === requiredLength) {
        event.currentTarget.classList.remove('invalid')   
        event.currentTarget.classList.add('valid');}
    else {
        event.currentTarget.classList.remove('valid'); 
        event.currentTarget.classList.add('invalid');
    }

};

