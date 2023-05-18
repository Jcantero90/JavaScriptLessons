import readline from "readline";
import Utils from "./utils.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const utils = new Utils();
utils.instrucciones();

function jugarTurnoJugador1() {
  rl.question("Jugador 1, ingresa tu movimiento: ", (movimiento) => {
    utils.playerOne(movimiento);
    utils.mostrarTablero();

    if (utils.esganador()) {
      console.log("¡Jugador 1 ha ganado!");
      rl.close();
    } else if (utils.tableroLleno()) {
      console.log("¡Empate!");
      rl.close();
    } else {
      jugarTurnoJugador2();
    }
  });
}

function jugarTurnoJugador2() {
  rl.question("Jugador 2, ingresa tu movimiento: ", (movimiento) => {
    utils.playerTwo(movimiento);
    utils.mostrarTablero();

    if (utils.esganador()) {
      console.log("¡Jugador 2 ha ganado!");
      rl.close();
    } else if (utils.tableroLleno()) {
      console.log("¡Empate!");
      rl.close();
    } else {
      jugarTurnoJugador1();
    }
  });
}

jugarTurnoJugador1();

