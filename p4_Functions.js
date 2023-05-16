/**
 * Uso y diseño de funciones. 
 * Son bloques de código, las cuales al ser ejecutadas, 
 * lanzan las sentencias de su interior de forma secuencial.  
 */

function HolaMundo(){
    console.log("Hola Mundo!");
}
//Si lanzamos este fragmento de código, ejecutamos el hola mundo de su interior. 
HolaMundo()


/**
 * funciones con variables
 */
function HolaMundoVariable(variable){
    console.log(variable);
}

//La variable será el texto que queramos ejecutar en el mensaje
HolaMundoVariable("Hola Mundo!")

/**
 * Funciones que devuelven un valor
 * con un return. 
 */

function suma (x, y){
    var resultado = x + y
    return resultado
}

//Hemos de declarar el function como si fuera una variable
//y luego usaremos la variable como deseemos. 

var resultadoSuma = suma(10,10)
console.log(resultadoSuma);

//también podemos directamente sacarlo por el console.log

function multiplicacion (x, y){
    var resultado = x * y
    return resultado
}

console.log(multiplicacion(4,4));

/**
 * Funcion flecha con return. 
 */

var resta = (a,b) =>{
    return a - b;
}

console.log(resta(4,2));
/**
 * La función flecha tiene ya implicito un return, por ende, 
 * aunque no  lo declaremos, funcionará igual. 
 */

var multiplicacion = (a,b)=>a*b;
console.log(multiplicacion(2,2));