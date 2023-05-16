//esto es un comentario.

/**
 * Esto es un comentario múltiple
 * Al pulsar Enter se autocompleta.
 */

// datos numéricos.
let num = 27;
console.log(num);

//datos booleanos
let verdadero = true;
let falso = false;
console.log(verdadero);
console.log(falso);

// datos null.
let valorNulable = null;
console.log(valorNulable);

//objeto
let objeto = { nombre: "Gabriel", edad: 27, casado: false };
console.log(objeto.nombre);
console.log(objeto);

//Arrays
let arrayCiudades = ["Madrid", "Valencia", "Barcelona"];
let objetoConArray = {
  nombre: "Juanjo",
  ciudades: arrayCiudades[1],
  edad: 1,
  direccion: { calle: "C/ no existe", CP: 00000, portal: 22 },
}; //le estamos asignando una ciudad en concreto.
console.log(objetoConArray); //Mostrará los datos + valencia.

//Undefined
let noInicialiced;
console.log(noInicialiced); //No tiene valores asignados, devolverá un "undefined."

/**
 * Tipos de variables
 * var : variables GLOBALES, puedes llamarla si está dentro de una función o no.
 * let : variables LOCALES, solo puedes llamarlas o declararlas en el bloque que la tengas delcarada
 * const : variable LOCAL con un valor estático, no se puede modificar.
 */

// Explicación de const:
const estatico = 27;
console.log(estatico);

estatico = 50; //esto NO SE PUEDE HACER.
console.log(estatico); //Este console.log dará error, ya que estamos intentando modificar una constante.

// Explicación de let:
for (let x = 0; x <= 10; x++) {
  let y = x;
  console.log(y);
}

console.log(y); // esto dara ERROR ya que let es una variable LOCAL.

// Explicación de var:
for (let x = 0; x <= 10; x++) {
  var y = x;
  console.log(y);
}

console.log(y); // aquí SI funcionará, ya que var es una variable GLOBAL.

/**
 * Forma de indexar un valor dentro de una cadena String
 */

let despedida = "Adios!";
console.log(`Hola! Esto es un ejemplo de como indexar datos. ${despedida}`);
