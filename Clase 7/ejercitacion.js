// Ejercicio 1
let edadMinima = 12;
let estaturaMinima = 1.30;

function montanaRusa(edad, estatura) {
    return edad > edadMinima && estatura > estaturaMinima
}

console.log(montanaRusa(12,1.40))

// Ejercicio 2
function usarFlash(pocaLuz, velocidad) {
    return pocaLuz || velocidad
}

console.log(usarFlash(true,true))

// Ejercicio 3
let parcial = 7;
let examenFinal = 4;

function aprobar(parcial1, parcial2, final) {
    return (parcial1 > parcial && parcial2 > parcial) || final >= examenFinal;
}

console.log(aprobar(6,8,3))

// Ejercicio 4
function verTV(hacerTarea, practicarPiano, tocarDeMemoria) {
    return hacerTarea && practicarPiano && tocarDeMemoria;
}

console.log(verTV(true,true,true))