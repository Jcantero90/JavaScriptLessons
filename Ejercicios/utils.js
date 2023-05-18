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

  TablaMultiplicarFor() {
    for (let x = 2; x <= 12; x++) {
      for (let y = 1; y <= 10; y++) {
        var resultado = x * y;
        console.log(`Tabla del ${x}: ${x} X ${y} = ${resultado}`);
      }
    }
  }
  TablaMultiplicarDoWhile() {
    var resultado;
    do {
      console.log(resultado);
      for (let x = 2; x <= 12; x++) {
        for (let y = 1; y <= 10; y++) {
          resultado = x * y;
          console.log(`Tabla del ${x}: ${x} X ${y} = ${resultado}`);
        }
      }
    } while (!(resultado >= 120));
  }

  Ejercicio1(factorial) {
    var resultadoFactorial = 1;
    for (let x = 1; x <= factorial; x++) {
      var resultadoFactorial = resultadoFactorial * x;
    }
    return resultadoFactorial;
  }
  Ejercicio2(upper) {
    var upperCAse = upper.toLocaleUpperCase();
    return upperCAse;
  }
  Ejercicio3(data1, data2) {
    var resultadofinal = 0;
    for (let x = data1 + 1; x < data2; x++) {
      resultadofinal = resultadofinal + x;
    }
    return resultadofinal;
  }
  Ejercicio4(matriz) {
    // var resultadoFactorial =  Array.from(matriz) //No me gusta. 
    var prueba = matriz.split(' ')
    console.log(prueba);
    var resultadofinal = 0;
     for (let x = 0; x < prueba.length; x++) {
      resultadofinal = resultadofinal + parseInt(prueba[x])
    }
    return resultadofinal
  }
  Ejercicio5(cadenaCaracteres){
    var cadenaToArray =  Array.from(cadenaCaracteres)
    var stringSuperGuapoDeLaMuerte = [];
    for (let x = 0; x < cadenaToArray.length; x++){
      stringSuperGuapoDeLaMuerte = stringSuperGuapoDeLaMuerte + cadenaToArray[x] + cadenaToArray[x]
    }
    return stringSuperGuapoDeLaMuerte
  }
}

export default utils;
