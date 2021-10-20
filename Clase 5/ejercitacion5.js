function test1(x,y) {
    return y-x
}

console.log(test1(10,40))

function test2(x,y){
    return x * 2;
    console.log(x)
    return x / 2;
}

console.log(test2(10))

// 1. Función que convierte pulgadas a cm.
function conversor(inch) {
    return inch * 2.54;
}
 
console.log(conversor(2))

// 2. Función que devuelve una URL
function URL(palabra) { 
    return "http://www."+palabra+".com"
}

console.log(URL("twitter"))

// 3. Función que devuelve con admiración
function admiracion(palabra) {
    return "¡"+palabra+"!"
}

console.log(admiracion("Adiós"))

// 4. Función que calcula edad de un perro
function edadPerro(edad) {
    return edad * 7;
}

console.log(edadPerro(14))

// 5. Función que calcula el valor de la hora de trabajo
function valorHora(sueldoMensual) {
    return sueldoMensual / 40;
}

console.log(valorHora(2000))

// 6. Función que calcula IMC
function calculadorIMC(altura, peso) {
    return peso / altura**2
}

console.log(calculadorIMC(1.80, 75))
console.log(calculadorIMC(1.72, 66))

// Funciones más difíciles
// 1. Convertir a mayúsculas
function mayuscula(texto){
    texto = texto.toUpperCase()
    return texto
}

console.log(mayuscula("PrUeBa De MaYuScula"))

// 2. Devolver tipo de variable
function tipoVariable(parametro) {
    return typeof parametro
}

console.log(tipoVariable(false))

// 3. Circunferencia de un círculo
function circunferencia(radio) {
    return 2 * Math.PI * radio
}

console.log("El círculo de radio "+4+" cm tiene una circunferencia de "+circunferencia(4)+ " cm")