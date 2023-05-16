/**
 * Comandos previos:
 * npm init
 * npm install
 */

import utils from "./utils.js"; //Importamos la clase utils
import readline, { clearScreenDown } from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// llamamos a la constante herramientas para acceder a los métodos internos.
const herramienta = new utils();
//Escribimos un menú para que el usuario elija el ejercicio que desee calcular.

var op;
do {
  console.log("opción 1: horas del día");
  console.log("opción 2: área rectángulo");
  console.log("opcion 3: Ejercicio grados Farenheit");
  console.log("opcion 4: cambiar el día de la semana If/Else ");
  console.log("Opcion 5: calcular los gastos de envio");
  console.log("Opcion 6: tabla multiplicar del 2 al 12");
  console.log("Opcion 7: tabla multiplicar del 13 al 24");

  rl.question("Ingresa Tu opcion: ", (opcion) => {
    op = parseInt(opcion);
    switch (op) {
      case 1:
        console.log(
          `Las horas del día son ${herramienta.ejercicioOperadores()}`
        );
        rl.close();
        break;
      case 2:
        rl.question("Ingresa la base: ", (base) => {
          rl.question("Ingresa la altura: ", (altura) => {
            var op1 = parseInt(base);
            var op2 = parseInt(altura);
            herramienta.areaRectangulo(op1, op2);
            rl.close();
          });
        });
        break;
      case 3:
        rl.question("Ingresa la cantidad de grados a cambiar: ", (grados) => {
          var numGrados = parseInt(grados);
          herramienta.conversorGrados(numGrados);
          rl.close();
        });
        break;
      case 4:
        console.log("Escribe el día en minúscula, sin tildes y sin espacios.");
        rl.question("Ingresa el día: ", (dia) => {
          herramienta.diaSemanaInglesIfElse(dia);
          rl.close();
        });
        break;
      case 5:
        rl.question("Ingresa el valor total de la compra: ", (compra) => {
          var op1 = parseInt(compra);
          herramienta.gastosDeEnvio(op1);
          rl.close();
        });
        break;
      case 6:
        herramienta.TablaMultiplicarFor();
        break;
      default:
        console.log("Error!");
        rl.close();
        break;
    }
  });
} while ((op >= 6));
