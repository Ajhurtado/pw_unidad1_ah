let num1=0;
let num2=0;
let operacionActual = ""; 

function mostrarEnDisplay(valor){ 
       //Aqui tengo el elemento display, mandamos un valor
       let elementoDisplay = document.getElementById("id_display");
       elementoDisplay.innerText = elementoDisplay.innerText + valor;
       if (valor !== "+") {
           concatenarNumero(valor);
       }else {
           operacionSumar();
   }
}

 

function operacionSumar() {
    esSegundoDigito = "1";
}

function concatenarNumero(valor) {
    let elementoDisplay = document.getElementById("id_display");
    elementoDisplay.innerText += valor;
}


function sumar() {
    let num1 = parseFloat(num1);
    let num2 = parseFloat(num2);
    let elementoDisplay = document.getElementById("id_display");
    elementoDisplay.innerText = num1 + num2;
}