let pulgadasACentimetros = pulgadas => pulgadas * 2.54;

console.log(pulgadasACentimetros(2));

let convertirAUrl = texto => "http://www." + texto + ".com";

console.log(convertirAUrl("facebook"));

let signosAdmiracion = texto => "¡" + texto + "!";

console.log(signosAdmiracion("Hola mundo"));

let edadPerro = edad => edad * 7;

console.log(edadPerro(4));

let valorHoraTrabajo = sueldoMensual => sueldoMensual / 40;

console.log(valorHoraTrabajo(4000));

let calcularIMC = (altura, peso) => peso / altura ** 2;

console.log(calcularIMC(1.80,78));

let convertirAMayuscula = textoMinuscula => textoMinuscula.toUpperCase();

console.log(convertirAMayuscula("holamundo"));

let tipoDato = dato => typeof(dato);

console.log(tipoDato("{nombre: , edad: 25}"));

let circunferencia = radio => 2 * Math.PI * radio;

console.log(circunferencia(5));

//callbacks
const nombres = ['Martin', 'Homero', 'Cosme', 'Steven', 'Adam'];

function buscarNombre(nombre, callback) {

    let variable = nombres.filter( function(element) {
        return nombre == element;
    } );

    return callback(variable);
}

function mostrarResultado(parametro) {
    if (parametro.length == 0) {
        return "Nombre no encontrado";
    }
    return "El Nombre fue encontrado";
}


//Ejemplo de invocacion
console.log(buscarNombre('Martin', mostrarResultado));
