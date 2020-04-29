const from = document.getElementById ('from');
const email = document.getElementById ('email');

from.addEventListener('submit', e=>{
    e.preventDefault();
    const emailVal= email.nodeValue;

    if(validateEmail(emailVal)){
        from.classList.add('error');
        
    } else{
        from.classList.remove('error');
        document.body.innerHTML = `Gracias!`;
    }

});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}