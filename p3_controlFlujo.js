// If / Else / Else If
//cambiar los argumnetos del if para probar las diferentes salidas.

const w = true; //boolean
const x = null; //object
const y = "cadena String"; //String
const z = 22; //number

if (z === false) {
  console.log("el valor de x es: " + z);
} else if (z === false) {
  console.log("El valor de x es: " + z);
} else {
  console.log("El valor de x es: " + typeof z);
}

// Switch / case

const producto = 2;
switch (producto) {
  case 1:
    console.log("Mensaje 1");
    break;
  case 2:
    console.log("Mensaje 2");
    break;
  default:
    console.log("Mensaje Default");
}

/**
 * en el caso de que necesitemos un rango numérico
 * para cada case:
 */

const precioenvio = 10;
const envioMenor10 = 3;
const envio10y20 = 5;
const envio20y50 = 7;
var resultado;

switch (precioenvio) {
  case precioenvio < 10:
    console.log(
      `tus gastos de envio son ${envioMenor10}, por lo tanto el precio total es ${(resultado =
        precioenvio + envioMenor10)}`
    );
    break;
  case precioenvio >= 10 && precioenvio < 20:
    console.log(
      `tus gastos de envio son ${envio10y20}, por lo tanto el precio total es ${(resultado =
        precioenvio + envio10y20)}`
    );
    break;
  case precioenvio >= 20 && precioenvio < 50:
    console.log(
      `tus gastos de envio son ${envio20y50}, por lo tanto el precio total es ${(resultado =
        precioenvio + envio20y50)}`
    );
    break;
  case precioenvio >= 50:
    console.log(`No tienes gastos de envio!`);
    break;
  default:
    console.log(
      "eres tan inutil, que no has sabido meter un número en la constante precioenvio. "
    );
    console.log(precioenvio);
}

/**
 * Switch y case para casos múltiples
 */

const month = new Date().getMonth();

switch (month) {
  // Enero, Febrero, Marzo
  case 0:
  case 1:
  case 2:
    console.log("Invierno");
    break;
  // Abril, Mayo, Junio
  case 3:
  case 4:
  case 5:
    console.log("Primavera");
    break;
  // Julio Iglesias, Agosto, Septiembre
  case 6:
  case 7:
  case 8:
    console.log("Verano");
    break;
  // Octoberfest, Noviembre, Diciembre.
  case 9:
  case 10:
  case 11:
    console.log("Otoño");
    break;
  default:
    console.log("Tu ordenador está roto.");
}
