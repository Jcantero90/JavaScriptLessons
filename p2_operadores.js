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

console.log(3 === '3'); // da False, ya que no es "Estrictamente igual"
console.log(3 == '3'); // da true, ya que en teoría, son iguales. 

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

console.log(true&&true);
console.log(true || false);
console.log(false || false);
console.log(!true);

/**
 * Operador condicional. 
 * (condicion ? ValorDeRetorno1 : ValorDeRetorno2)
 */

console.log( 2 > 3 ? 'El número es mayor' : 'El número es menor'); // es un If/Else, aquí lanza que 2 es menor que 3. 