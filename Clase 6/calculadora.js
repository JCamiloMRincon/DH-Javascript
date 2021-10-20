// Función sumar
function sumar(sumando1 ,sumando2) {
    return sumando1 + sumando2
}

// Función restar
function restar(minuendo ,sustraendo) {
    return minuendo - sustraendo
}

// Función multiplicar
function multiplicar(factor1, factor2) {
    return factor1 * factor2
}

// Función dividir
function dividir(dividendo, divisor) {
    if (divisor == 0) {
        return "ERROR: El divisor debe ser mayor a 0";
    }
    else {
        return dividendo / divisor;
    }
}

console.log("-------------- Testeo de Operaciones / Calculadora --------------")
console.log(sumar(2,3)) 
console.log(restar(10,-7)) 
console.log(multiplicar(-2,3.5)) 
console.log(dividir(10,2))
console.log(dividir(5,0))

// Función cuadrado
function cuadradoDeUnNumero(a) {
    return multiplicar(a,a)
}

// Función promedio
function promedioDeTresNumeros(a,b,c) {
    return dividir(sumar(sumar(a,b),c),3)
}

// Función porcentaje
function calcularPorcentaje(a,b) {
    return dividir(multiplicar(a,b),100)
}

// Función generador de porcentaje
function generadorDePorcentaje(a,c) {
    return dividir(multiplicar(c,100),a)
}

console.log(generadorDePorcentaje(200,2) + " %")
