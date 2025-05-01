function guardar(){
    validar();
}

function validar(){
    let nombre = document.getElementById("id_nombre").value;

    if(nombre === ""){
        console.log("ERROR no ha ingresado el nombre");
    }else{
        console.log("Paso la validacion del nombre");
    }
}