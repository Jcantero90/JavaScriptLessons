/**
 * Cómo recorrer un Array.
 */

var cadenaArray = [5,4,3,2,1,0]

for(let x = 0; x< cadenaArray.length; x++){ //el .lenght es la longitud del Array
    console.log(`esta es la iteración del bucle for numero ${x}`);
    console.log(`el valor del Array es ${cadenaArray[x]}`);
}

/**
 * Añadir elemento a un Array de forma externa con .push
 */

cadenaArray.push(110)
console.log(cadenaArray); //el último valor añadido es el número 110

/**
 * Elimina el último elemento con un .pop
 */

cadenaArray.pop()
console.log(cadenaArray);

/**
 * Elimina el primer elemento con un .shift
 */

cadenaArray.shift()
console.log(cadenaArray);

/**
 * Map, crea un elemento inmutable, osea, crea un Array nuevo pero no modifica el original. 
 * Mapea cada uno de los elementos del array igual que un bucle for. 
 */

var estudiantes = ['Estudiante1','Estudiante2','Estudiante3']
var estudiantesBecas = estudiantes.map((objetoArray,rest)=>{
    return {
        num: rest,
        nombre: objetoArray,
        becado: false
    }
})

console.log(estudiantesBecas);

/**
 * Arrays con objetos dentro
 */

var aliexpress =[
    { nom : 'Tshirt', price: 22},
    { nom : 'Shoes', price: 23},
    { nom : 'hat', price: 24},
    { nom : 'gloves', price: 25}
]
var aliexpressGastosEnvioPermanentes = aliexpress.map((producto)=>{
    producto.gastoEnvio =.12; //Estampos añadiendo una variable PERMANENTE más dentro de nuestro objeto, el cual se ubica DENTRO de un Array. 
    return producto
})
console.log(aliexpress);
console.log(aliexpressGastosEnvioPermanentes);

var aliexpressGastosEnvioTemporales = aliexpress.map((producto)=>{
    return {
        ...producto, //Al declarar así el return, nos aseguramos de que tendremos un nuevo objeto. 
        datoDeEjemplo: 15
    }
})
console.log(aliexpress);
console.log(aliexpressGastosEnvioTemporales); //De esta forma nos aseguramos de que es un nuevo objeto. 

/**
 * Filtrado de Arrays
 * utilizamos la función filter. 
 */

var estudiantes = [
    { nombre : "user1", edad: 16, matriculado: true},
    { nombre : "user2", edad: 17, matriculado: false},
    { nombre : "user3", edad: 18, matriculado: true},
    { nombre : "user4", edad: 19, matriculado: false},
    { nombre : "user5", edad: 20, matriculado: true},
    { nombre : "user6", edad: 21, matriculado: false}
]
//Vamos a filtrar estudiantes por su edad.
var filtradoEdadEstudiantes = estudiantes.filter((objetoEstudiante)=> objetoEstudiante.edad >= 18);
console.log(estudiantes);
console.log(filtradoEdadEstudiantes);

//Vamos a hacer el filtrado por un booleano. 
var filtradoMatriculado = estudiantes.filter((estudianteMadriculado)=> estudianteMadriculado.matriculado === true)
console.log(filtradoMatriculado);

//Filtrado múltiple
var variosFiltrados = estudiantes.filter((filtradoMultiple)=> filtradoMultiple.edad >= 20 && filtradoMultiple.matriculado === false)
console.log(variosFiltrados);

/**
 * Buscar con la sentencia find
 * y FindIndex.
 */

var Residentes = [
    { nombre : "user1", edad: 16, matriculado: true},
    { nombre : "user2", edad: 17, matriculado: false},
    { nombre : "user3", edad: 18, matriculado: true},
    { nombre : "user4", edad: 19, matriculado: false},
    { nombre : "user5", edad: 20, matriculado: true},
    { nombre : "user6", edad: 21, matriculado: false}
]

//Si queremos que nos devuelva el objeto completo
var residentesFind = Residentes.find((getNombre)=> getNombre.nombre === "user1")
console.log(residentesFind);

//Si queremos que nos devuelva la posición dentro del Array
var residentesFind = Residentes.findIndex((getNombre)=> getNombre.nombre === "user1")
console.log(residentesFind);

var censo = ["persona1","persona2","persona3"]

//Ver si incluye un caracter o una cadena String
var censoInclude = censo.includes('persona1')
console.log(censoInclude);

//se puede usar también directamente sobre la cadena de caracteres. 
console.log('ejemplo'.includes("a"));

/**
 * Para unir elementos de un array
 * entre si a traves de los caracteres
 * que le indiquemos
 */

var arrayNumeros = [1,2,3,4,5,6,7]
var arrayNumerosJoin = arrayNumeros.join("--")
console.log(arrayNumerosJoin);