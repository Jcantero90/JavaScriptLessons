
import readline, { clearScreenDown } from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class utils {

    ejercicioOperadores(){
        let segundosMinuto = 60
        let minutosHora = 60
        let horasDia = 24
        var resultado = segundosMinuto * minutosHora * horasDia 
        return resultado;
    }
    areaRectangulo(){
            rl.question('Ingresa la base: ', (base) => {
            rl.question('Ingresa la altura: ', (altura) => {
                const area = base * altura;
                console.log(`El área del rectángulo es: ${area}`);
                rl.close();
            })
        })
    }
    // areaRectanguloProcess(){ //NO FUNCIONA. 
    //     var bas;
    //     var alt;
    //     process.stdout.write("Escribe la base")
    //     process.stdin.on('data',function(base){
    //         bas = base
    //     })
    //     process.stdout.write("Escribe la altura")
    //     process.stdin.on('data',function(altura){
    //         alt = altura
    //     })
    //     const area = bas + alt
    //     console.log(area);
    // }

    conversorGrados(grados, multiplicacion, suma){
            var farenheit = grados * multiplicacion + suma
            console.log(`el resultado es ${farenheit}`);
    }
}
export default utils;


