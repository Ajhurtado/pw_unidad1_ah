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

    /*Cuando manejamos objetos con atributos de tipo objeto */
    /*Ejemplo Estudiante tiene objeto direccion */

    const ciudadano={
        nombre: 'Alexis',
        apellido: 'Hurtado',
        direccion:{
            callePrincipal: 'Av. America',
            calleSecuandaria: 'Av. La Gasca',
            numeracion: '123',
            barrio: {
                referencia: 'Frente al dilipa',

            }
        }
    }

    console.log(ciudadano);
    console.log(ciudadano.nombre); // Alexis
    console.log(ciudadano.direccion); 
    console.log(ciudadano.direccion.callePrincipal); // Av. America
    ciudadano.direccion.callePrincipal='Av Amazonas';
    console.log(ciudadano);

    const es1={
        nombre:'Alexis'
    }
    const es2={
        nombre:'Jhoel'
    }

    const arregloEstudiantes=[es1, es2];
    console.log(arregloEstudiantes); 

    const arregloEstudiantes2=[
        {
            nombre:'Alexis', apellido:'Hurtado'
        },
        {
            nombre:'Jhoel',apellido:'Pinán'
        }
    ]
    console.log(arregloEstudiantes2);
    console.log(arregloEstudiantes2[1].apellido); // Pinán


    //Desestructuracion de arreglos
    const colores=['Amarillo', 'Azul', 'Rojo', 'Verde', 'Naranja'];
    //Alias a cada posicion del arreglo
    const [color1, color2, color3, color4, color5]=colores;
    console.log(color1); // Amarillo
    console.log(color5); // Naranja
    
    //No puedo poner el nombre de la variable que ya existe
    const [c1, c2]=colores;
    console.log(c1); // Amarillo
    console.log(c2); // Azul

    const [, ,c3]=colores;
    console.log(c3); // Rojo

    //Podemos hacerlo de manera directa
    const [c01, c02]=['Amarillo', 'Azul', 'Rojo', 'Verde', 'Naranja'];

    //Puedo desestructurar en cualquier parte del código un arreglo
    desestructuracionArreglos(colores);

    //No necesariamente necesito conocer, porque puedo imaginar una condicion
    const [,p2,p3,p4,p5,p6,p7,p8,p9,p10] = desestructuracionArreglos2();
    console.log(p2);// Azul
    console.log(p3); // Rojo
    console.log(p10); // undefined
    

    //Desestructuracion por operador REST
    console.log('Desestructuracion por operador REST');
    const [p1,...resto] =desestructuracionArreglos2(); // [ 'Azul', 'Rojo', 'Verde', 'Naranja' ]
    console.log(p1); // Amarillo
    console.log(resto); // [ 'Azul', 'Rojo', 'Verde', 'Naranja' ]



    //Desestructuracion de objetos
    const auto={
        marca:'Toyota',
        modelo:'Prius',
        anio:2020,
        color:'Amarillo'
    }

    const {marca,color,anio} =auto; 
    console.log(marca); 

    //En una sola linea
    const {anio1}={
        marca1:'Toyota',
        modelo1:'Prius',
        anio1:2020,
        color1:'Amarillo'
    }
    console.log(anio1); // 2020
    
    //A traves de un metodo
    desestructuracionObjeto(auto);// {marca:'Toyota', modelo:'Prius', anio:2020, color:'Amarillo'}

    //Objeto con un atributo de tipo objeto
    const universidad={
        nombre:'UCE',
        direccion:'Av. America',
        rector:{
            nombreR:'Alexis',
            apellidoR:'Pinán',
        }
    }

  
    //Desestructurar el objeto
    const {rector,nombreR}=universidad;
    console.log(rector); // {nombre:'Alexis', apellido:'Pinán'}
    const {apellidoR}=rector; // Pinán
    console.log(apellidoR); // Pinán

    //Desestructurar el objeto en una sola linea
    const universidad2={
        nombre2:'UCE',
        direccion2:'Av. America',
        rector2:{
            nombreR2:'Alexis',
            apellidoR2:'Pinán',
        }
    }

    const {nombre2,rector2:{nombreR2}}=universidad2; 
    console.log(nombreR2); // Alexis

    //Desestructuracion por operador REST
    const autoR={
        marcaR:'Toyota',
        modeloR:'Prius',
        anioR:2020,
        colorR:'Amarillo'
    }

    const {marcaR,...restoo}=autoR;
    console.log(marcaR); // Toyota
    console.log(restoo); // {modeloR:'Prius', anioR:2020, colorR:'Amarillo'}

}


function desestructuracionArreglos([color1,color2,color3]){
    console.log(color1);
    console.log(color2);
    console.log(color3);
}

function desestructuracionArreglos2(){
    const colores = ['Rosado','Azul','Rojo','Verde','Naranja'];
    return colores
}
    
function desestructuracionObjeto(objeto){
    console.log(objeto);
}

//Si yo se que aqui va un objeto, puedo aplicar los valores de los atributos
function desestructuracionObjeto({marca,color}){
    console.log(marca);
    console.log(color);
}

