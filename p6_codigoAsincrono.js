/**
 * JavaScript no ejecuta de forma secuencial el código
 * En el siguiente ejemplo veremos como no bloquea el código cuando se encuentra con algo que tarda más de la cuenta
 */

console.log("Test 1");
console.log("Test 2");
console.log("Test 3");
console.log("Test 4");
setTimeout(()=>{
    console.log("Test 5"); //Test 5 será el último en ejecutarse, ya que el código es asíncrono por defecto. 
}, 2000)
console.log("Test 6");

