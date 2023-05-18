var marcoSuperior = ["|A|", "|B|", "|C|"];
var tableroSuperior = ["| |", "| |", "| |"];
var tableroMedio = ["| |", "| |", "| |"];
var tableroInferior = ["| |", "| |", "| |"];

class Utils {
  mostrarTablero() {
    console.log(" :" + marcoSuperior);
    console.log("1:" + tableroSuperior);
    console.log("2:" + tableroMedio);
    console.log("3:" + tableroInferior);
  }
  instrucciones() {
    console.log("Bienvenido a un 3 en raya a través de la consola!");
    console.log(
      "Se trata de un juego por turnos donde participaran dos jugadores"
    );
    console.log(
      "Para especificar cada movimiento se hará especificando la parte superior del tablero y luego la parte inferior"
    );
    console.log("Ejemplo: A1");
    console.log("Comencemos!");
  }

  playerOne(movimiento) {
      var movimientoValido = false;
      if (movimiento === "A1" && tableroSuperior[0] === "| |") {
        tableroSuperior[0] = "|O|";
        movimientoValido = true;
      } else if (movimiento === "B1" && tableroSuperior[1] === "| |") {
        tableroSuperior[1] = "|O|";
        movimientoValido = true;
      } else if (movimiento === "C1" && tableroSuperior[2] === "| |") {
        tableroSuperior[2] = "|O|";
        movimientoValido = true;
      } else if (movimiento === "A2" && tableroMedio[0] === "| |") {
        tableroMedio[0] = "|O|";
        movimientoValido = true;
      } else if (movimiento === "B2" && tableroMedio[1] === "| |") {
        tableroMedio[1] = "|O|";
        movimientoValido = true;
      } else if (movimiento === "C2" && tableroMedio[2] === "| |") {
        tableroMedio[2] = "|O|";
        movimientoValido = true;
      } else if (movimiento === "A3" && tableroInferior[0] === "| |") {
        tableroInferior[0] = "|O|";
        movimientoValido = true;
      } else if (movimiento === "B3" && tableroInferior[1] === "| |") {
        tableroInferior[1] = "|O|";
        movimientoValido = true;
      } else if (movimiento === "C3" && tableroInferior[2] === "| |") {
        tableroInferior[2] = "|O|";
        movimientoValido = true;
      } else {
        console.log("Casilla ocupada o no válida!");
      }
  }
  playerTwo(movimiento) {
    var movimientoValido = false;
    if (movimiento === "A1" && tableroSuperior[0] === "| |") {
      tableroSuperior[0] = "|X|";
      movimientoValido = true;
    } else if (movimiento === "B1" && tableroSuperior[1] === "| |") {
      tableroSuperior[1] = "|X|";
      movimientoValido = true;
    } else if (movimiento === "C1" && tableroSuperior[2] === "| |") {
      tableroSuperior[2] = "|X|";
      movimientoValido = true;
    } else if (movimiento === "A2" && tableroMedio[0] === "| |") {
      tableroMedio[0] = "|X|";
      movimientoValido = true;
    } else if (movimiento === "B2" && tableroMedio[1] === "| |") {
      tableroMedio[1] = "|X|";
      movimientoValido = true;
    } else if (movimiento === "C2" && tableroMedio[2] === "| |") {
      tableroMedio[2] = "|X|";
      movimientoValido = true;
    } else if (movimiento === "A3" && tableroInferior[0] === "| |") {
      tableroInferior[0] = "|X|";
      movimientoValido = true;
    } else if (movimiento === "B3" && tableroInferior[1] === "| |") {
      tableroInferior[1] = "|X|";
      movimientoValido = true;
    } else if (movimiento === "C3" && tableroInferior[2] === "| |") {
      tableroInferior[2] = "|X|";
      movimientoValido = true;
    } else {
      console.log("Casilla ocupada o no válida!");
    } return movimientoValido
}

  esganador() {
    var ganador = false;
    if (
      tableroSuperior[0] == "|O|" &&
      tableroSuperior[1] == "|O|" &&
      tableroSuperior[2] == "|O|"
    ) {
      ganador = true;
    } else if (
      tableroMedio[0] === "|O|" &&
      tableroMedio[1] === "|O|" &&
      tableroMedio[2] === "|O|"
    ) {
      ganador = true;
    } else if (
      tableroInferior[0] === "|O|" &&
      tableroInferior[1] === "|O|" &&
      tableroInferior[2] === "|O|"
    ) {
      ganador = true;
    } else if (
      tableroInferior[0] === "|O|" &&
      tableroMedio[1] === "|O|" &&
      tableroSuperior[2] === "|O|"
    ) {
      ganador = true;
    } else if (
      tableroSuperior[0] === "|O|" &&
      tableroMedio[1] === "|O|" &&
      tableroInferior[2] === "|O|"
    ) {
      ganador = true;
    } else if (
      tableroSuperior[1] === "|O|" &&
      tableroMedio[1] === "|O|" &&
      tableroInferior[1] === "|O|"
    ) {
      ganador = true;
    } else if (
      tableroSuperior[0] == "|O|" &&
      tableroMedio[0] == "|O|" &&
      tableroInferior[0] == "|O|"
    ) {
      ganador = true;
    } else if (
      tableroSuperior[2] === "|O|" &&
      tableroMedio[2] === "|O|" &&
      tableroInferior[2] === "|O|"
    ) {
      ganador = true;
    } // final del bucle
    else if (
      tableroSuperior[0] === "|X|" &&
      tableroSuperior[1] === "|X|" &&
      tableroSuperior[2] === "|X|"
    ) {
      ganador = true;
    } else if (
      tableroMedio[0] === "|X|" &&
      tableroMedio[1] === "|X|" &&
      tableroMedio[2] === "|X|"
    ) {
      ganador = true;
    } else if (
      tableroInferior[0] === "|X|" &&
      tableroInferior[1] === "|X|" &&
      tableroInferior[2] === "|X|"
    ) {
      ganador = true;
    } else if (
      tableroInferior[0] === "|X|" &&
      tableroMedio[1] === "|X|" &&
      tableroSuperior[2] === "|X|"
    ) {
      ganador = true;
    } else if (
      tableroSuperior[0] === "|X|" &&
      tableroMedio[1] === "|X|" &&
      tableroInferior[2] === "|X|"
    ) {
      ganador = true;
    } else if (
      tableroSuperior[1] === "|X|" &&
      tableroMedio[1] === "|X|" &&
      tableroInferior[1] === "|X|"
    ) {
      ganador = true;
    } else if (
      tableroSuperior[0] === "|X|" &&
      tableroMedio[0] === "|X|" &&
      tableroInferior[0] === "|X|"
    ) {
      ganador = true;
    } else if (
      tableroSuperior[2] === "|X|" &&
      tableroMedio[2] === "|X|" &&
      tableroInferior[2] === "|X|"
    ) {
      ganador = true;
    }
    return ganador;
  }

  tableroLleno() {
    const tablero = [
      ...marcoSuperior,
      ...tableroSuperior,
      ...tableroMedio,
      ...tableroInferior,
    ];
  
    return !tablero.includes("| |");
  }
  

}
export default Utils;
