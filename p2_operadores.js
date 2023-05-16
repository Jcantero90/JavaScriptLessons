// Operadores de asignación

// el operador = le asigna un valor a una variable:
var x = 1;

/**
 * el operador += le dice que el valor inicial ha de ser el mismo que la variable
 *  YA DECLARADA y asignarle la suma del valor tras el +=
 *  la expresión antigua sería algo así como: x = x + 5;
 */

x += 5;
console.log(x); //Nos devolverá 6, ya que ha cogido el valor inicial de X (1) y le ha sumado el valor que le hemos añadido.

/**
 * Otras variables: -= Resta el valor que haya tras el =
 *                  *= Multiplica el valor que haya tras el =
 *                  /= Divide por el valor que haya tras el =
 *                  %= Realiza el porcentaje tras el valor que haya tras el =
 *                  **= eleva el numero base al número que haya tras el =
 */

/**
 * Operadores de comparación
 *
 * Operador igual ==
 * Operador No es igual !=
 * Operador estrictamente igual ===
 * Operador desigualdad estricta !==
 * Operador mayor que >
 * operador menor que <
 * operador mayor o igual >=
 * operador menor o igual <=
 *
 * Devuelven un true o un false si realizamos una comparación por un console.log
 */

console.log(3 === "3"); // da False, ya que no es "Estrictamente igual"
console.log(3 == "3"); // da true, ya que en teoría, son iguales.

/**
 * Operadores aritméticos
 *
 * suma +
 * resta -
 * multiplicación *
 * división /
 * porcentaje %
 * elevar potencia **
 */

console.log(7 ** 2);

/**
 * Operadores de incremento
 * incrementa un número ++
 * decrementa un número --
 */

var number = 0;
console.log(++number); // lo suma antes de que se ejecute
console.log(number++); // lo suma despues de que se ejecute
console.log(number); // aquí tendremos el número ya sumado.

/**
 * Comparadores (normalmente usadas dentro de un if)
 * AND &&
 * OR ||
 * NOT !
 */

console.log(true && true);
console.log(true || false);
console.log(false || false);
console.log(!true);

/**
 * Operador condicional.
 * (condicion ? ValorDeRetorno1 : ValorDeRetorno2)
 */

console.log(2 > 3 ? "El número es mayor" : "El número es menor"); // es un If/Else, aquí lanza que 2 es menor que 3.

/**
 * Operador de desestructuración
 */

var persona = {
  nombre: "nom1",
  apell: "apellido",
};

var { nombre } = persona;
console.log(nombre); //Estoy sacando el nombre de un objeto.

// Desectructuración de Arrays.
var arrayDesestructurado = [1, "Casilla 1", 3, 4, "String"];
var arrayCasilla1 = arrayDesestructurado[1];
console.log(arrayCasilla1);

var [casilla1, casilla2] = arrayDesestructurado; //Llamamos a la celda 0 y 1 con nombres de variables
console.log(casilla1); //al imprimirla por pantalla, llamará a la casilla 0.
console.log(casilla2); //al imprimirla por pantalla, llamará a la casilla 1.

// Llamar a los datos de su interior en vez de al objeto completo.
var ObjetoConDatos = {
  dato1: "Dato1",
  dato2: "Dato2",
};
console.log(ObjetoConDatos.dato1);
console.log(ObjetoConDatos["dato2"]);

//Como ver el tipo de dato de un valor:
console.log(typeof "Esto es un String");

//Para ver si una variable es un número, un string o un objeto:

var numero = 10
var cadenaString = "esto es un string"
var variablenull = null

if (typeof numero === 'number'){
  console.log("la variable es un número");
} 
if (typeof cadenaString === 'string'){
  console.log("la variable es un string");
}
if (typeof variablenull === 'object'){
  console.log("Es un objeto");
}

