

function validarmail(mail) {
    const regexmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexmail.test(mail);
  }

formulario.addEventListener("submit",e=>{
    e.preventDefault()
    const formulario = document.getElementById("formulario"); 
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const mail = document.getElementById("mail").value.trim();
    
    if (nombre.length=0){
        alert("Debes completar el nombre");
    }
    if (apellido.length=0){
        alert("Debes completar el apellido");
    }
    if (!validarmail(mail)){
        alert("Debes ingresar un formato de mail valido")
    }
});

