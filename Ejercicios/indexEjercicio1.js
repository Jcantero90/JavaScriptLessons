/**
 * Comandos previos: 
 * npm init
 * npm install
 */

import utils from "./utils.js" //Importamos la clase utils

// llamamos a la constante herramientas para acceder a los métodos internos. 
const herramienta = new utils

//Ejercicio segundos en el día
var result = herramienta.ejercicioOperadores()
console.log(`Las horas del día son ${result}`);

// //Ejercicio area rectángulo.
herramienta.areaRectangulo()

//Ejercicio grados Farenheit
herramienta.conversorGrados(20, 9/5 ,32)



