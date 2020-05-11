const form = document.getElementById ('form');
const email = document.getElementById ('email');

form.addEventListener('submit', handleSubmit);

//"addEventListener" permite añadir una función cuando cierta acción suceda sobre un Elemento mencionado en HTML, en este caso "submit" del form.
function handleSubmit(event) { 
    
    event.preventDefault();
    const emailVal= email.value;

    console.log(emailVal);

    if(!validateEmail(emailVal)){
        // aqui esta aplicando los estilos de CSS de la clase "ERROR"
        form.classList.add('error'); 
        
    } else{
        form.classList.remove('error');
        document.body.innerHTML =`Gracias!`; // reemplzada todo el Body del HTML
    }

  }
  

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}