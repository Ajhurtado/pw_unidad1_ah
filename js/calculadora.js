const SUMA = '+';
const RESTA = '-';
const MULTIPLICACION = '*';
const DIVISION = '/';


function sumar(numero1, numero2) {
    return numero1 + numero2;
}
function restar(numero1, numero2) {
    return numero1 - numero2;
}
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}
function dividir(numero1, numero2) {
    return numero1 / numero2;
}

function evaluarOperacion(tipo) {
    let num1= parseFloat(document.getElementById('id_numero_1').value);
    let num2= parseFloat(document.getElementById('id_numero_2').value);

    let resultado=0;

    if(tipo===SUMA){
        resultado=sumar(num1, num2);
    }
    if(tipo===RESTA){
        resultado=restar(num1, num2);
    }
    if(tipo===MULTIPLICACION){
        resultado=multiplicar(num1, num2);
    }
    if(tipo===DIVISION){
        resultado=dividir(num1, num2);
    }
    document.getElementById('id_resultado').innerText = document.getElementById('id_resultado').innerText + resultado.toString();


}

/*Declaramos otra forma, funciones lambda */
const fundamentos = () => {
    console.log('Fundamentos de JavaScript');

    /*Tipos de Variables
    var
    let: variables cambiantes
    const: variables constantes
    */

    let nombre = 'Juan';
    let edad = 25;
    let arreglo = [1, 2, 3, 4, 5];

    const nombreConstante = 'Pedro';
    const edadConstante = 30;

    console.log(arreglo);
    console.log('texto de prueba');

    /*Arreglos */
    const diasLaborales = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    console.log(diasLaborales); // ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
    console.log(diasLaborales[0]); // Lunes

    console.log(diasLaborales[10]);
    let valor='';
    console.log(valor); 

    diasLaborales.push('Sábado');
    diasLaborales.unshift('Dias'); 
    console.log(diasLaborales); // ['Dias', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

    const numeroImpares = [1, 3, 5, 7, 9];
    const numeroPares = [2, 4, 6, 8];

    const numeros = numeroImpares.concat(numeroPares);
    console.log(numeros); // [1, 3, 5, 7, 9, 0, 2, 4, 6, 8]

    /*Sentencias de control */
    for(const dia of diasLaborales){
        console.log(dia);
        if(dia==='Viernes'){
            console.log('Por fin Viernes');
        } else{
            console.log('Aún no es viernes');
        }

        if(dia!=='Viernes'){
            console.log('Día normal');
        } else{
            console.log('Día de salida');
        }
    
    }

    /*Manejo de objetos */
    const miProfesor={
        nombre: 'Alexis',
        apellido: 'Hurtado',
        edad: 25,
        genero: 'Masculino',
        ciudad:'Quito'
    }
    console.log(miProfesor); 

    /*Seteo de atributos*/
    
    console.log(miProfesor.nombre); // Alexis
    miProfesor.apellido='Pinán';
    console.log(miProfesor); // Pinán

    if(miProfesor.ciudad==='Quito'){
        console.log('Es de la capital');
    }

    /*Arreglo de 3 estudiantes */
    const estudiantes=[
        {
            nombre: 'Juan',
            apellido: 'Pérez',
            edad: 20,
            genero: 'Masculino',
            ciudad:'Quito'
        },
        {
            nombre: 'María',
            apellido: 'Gómez',
            edad: 22,
            genero: 'Femenino',
            ciudad:'Guayaquil'
        },
        {
            nombre: 'Pedro',
            apellido: 'López',
            edad: 21,
            genero: 'Masculino',
            ciudad:'Cuenca'
        }
    ]

    console.log(estudiantes); 


    const miProfesor2={
        nombre: 'Alexis',
        apellido: 'Hurtado',
        edad: 25,
        genero: 'Masculino',
        ciudad:'Quito'
    }
    const miProfesor3={
        nombre: 'Jhoel',
        apellido: 'Pinan',
        edad: 27,
        genero: 'Masculino',
        ciudad:'Quito'
    }
    const miProfesor4={
        nombre: 'Juan',
        apellido: 'Riquezo',
        edad: 27,
        genero: 'Masculino',
        ciudad:'Quito'
    }

    console.log([miProfesor2, miProfesor3]);
    console.table([miProfesor2, miProfesor3,miProfesor4]); 
}

