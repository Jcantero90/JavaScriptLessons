import readline, { clearScreenDown } from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class utils {
  /**
   * Ejercicios Operadores.
   */

  ejercicioOperadores() {
    let segundosMinuto = 60;
    let minutosHora = 60;
    let horasDia = 24;
    var resultado = segundosMinuto * minutosHora * horasDia;
    return resultado;
  }
  areaRectangulo(base, altura) {
    const area = base * altura;
    console.log(`El área del rectángulo es: ${area}`);
  }
  conversorGrados(grados) {
    var farenheit = (grados * 9) / 5 + 32;
    console.log(`el resultado es ${farenheit}`);
  }

  /**
   * ejercicio control de flujo.
   */

  diaSemanaInglesIfElse(dia) {
    if (dia == "lunes") {
      console.log("Monday");
    } else if (dia == "martes") {
      console.log("Tuesday");
    } else if (dia == "miercoles") {
      console.log("Wednesday");
    } else if (dia == "jueves") {
      console.log("Thursday");
    } else if (dia == "viernes") {
      console.log("Friday");
    } else if (dia == "sabado") {
      console.log("Saturday");
    } else if (dia == "domingo") {
      console.log("Sunday");
    } else {
      console.log("I am a error");
    }
  }
  gastosDeEnvio(precioenvio) {
    const envioMenor10 = 3;
    const envio10y20 = 5;
    const envio20y50 = 7;
    var resultado;

    switch (true) {
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
  }

  /**
   * Ejercicios ciclos. 
   */

  TablaMultiplicarFor(){
    for(let x = 2; x <=12; x++){
        for(let y = 1; y <= 10 ; y++){
            var resultado = x * y
            console.log(`Tabla del ${x}: ${x} X ${y} = ${resultado}`);
        }
    }
  }
  TablaMultiplicarDoWhile(){
    var resultado;
    do{
      console.log(resultado);
        for(let x = 2; x <=12; x++){
            for(let y = 1; y <= 10 ; y++){
                resultado = x * y
                console.log(`Tabla del ${x}: ${x} X ${y} = ${resultado}`);
            }
        }
    } while(!(resultado >= 120))
  }
}

export default utils;
