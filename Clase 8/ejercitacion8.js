// Función totalAPagar()

function totalAPagar(vehiculo, litrosConsumidos) {
    
    let precioPorLitro
    vehiculo = vehiculo.toLowerCase()

    switch (vehiculo) {
        case "coche":
            precioPorLitro = litrosConsumidos * 86
        break
        case "moto":
            precioPorLitro = litrosConsumidos * 70
        break
        case "autobus":
            precioPorLitro = litrosConsumidos * 55
        break
        default:
            return "Vehículo no válido."
    }

    if (litrosConsumidos > 0 && litrosConsumidos < 25) {
        precioPorLitro += 50
    } else if (litrosConsumidos >= 25) {
        precioPorLitro += 25
    } else {
        return "Los litros consumidos no pueden ser negativos."
    }

    return "El total a pagar es: $ " + precioPorLitro

}

// Local de sándwiches

function seleccionPan(tipoPan) {
    
    tipoPan = tipoPan.toLowerCase()

    switch (tipoPan) {
        case "blanco":
            precioFinal = 50
        break
        case "negro":
            precioFinal = 60
        break
        case "sin gluten":
            precioFinal = 75
        break
        default:
            return "Seleccione un tipo de pan válido"
    }
    
    return precioFinal
}

function seleccionBase(tipoBase) {
    
    let precioFinal
    tipoBase = tipoBase.toLowerCase()

    switch (tipoBase) {
        case "pollo":
            precioFinal = 150
        break
        case "carne":
            precioFinal = 200
        break
        case "veggie":
            precioFinal = 100
        break
        default:
            return "Seleccione un tipo de base válido"
    }
    
    return precioFinal 
}

function seleccionAdiciones(queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
    
    let precioFinal = 0
    
    if (queso == true) {
        precioFinal += 20
    }

    if (tomate == true) {
        precioFinal += 15
    }

    if (lechuga == true) {
        precioFinal += 10
    }

    if (cebolla == true) {
        precioFinal += 15
    }

    if (mayonesa == true) {
        precioFinal += 5
    }

    if (mostaza == true) {
        precioFinal += 5
    }

    return precioFinal
}

function seleccionSandwich(pan, base, adiciones) {
    
    if (isNaN(pan) || isNaN(base) ) {
        return "No es posible preparar el sándwich."
    } else {
        precioSandwich = pan + base + adiciones
        return "El valor total del sándwich es: $ " + precioSandwich
    }

}

// ¿Cuál es el número secreto?

function secretNumber(number) {
    
    let secret = Math.round(Math.random() * 10)
    
    if (secret == 0) {
        secret += 1
    }
    
    if (number == secret) {
        return "¡Felicitaciones!"
    } else {
        return "¡Lo lamento! Escribiste: " + number + " y el número secreto es: " + secret
    }

}

// Función abrirParacaidas()

function abrirParacaidas(velocidad, altura) {
    
    let respuesta = velocidad <= 1000 && (altura >= 2000 && altura < 3000) ? "Abrir paracaídas.": "No abrir paracaídas."
    return respuesta

}

// Traductor condicional

function traductorCondicional(palabra) {
    
    palabra = palabra.toLowerCase()

    switch (palabra) {
        case "casa":
            return "house"
        case "perro":
            return "dog"
        case "pelota":
            return "ball"
        case "árbol":
            return "tree"
        case "genio":
            return "genius"
        default:
            return "La palabra ingresada es incorrecta."
    }

}

// Valoración de películas

function valoracionPeliculas(calificacion) {
    
    switch (calificacion) {
        case "Muy mala":
            return "Calificaste la película como muy mala."
        case "Mala":
            return "Calificaste la película como mala."
        case "Mediocre":
            return "Calificaste la película como mediocre."
        case "Buena":
            return "Calificaste la película como buena."
        case "Muy buena":
            return "Calificaste la película como muy buena."
        default:
            return "Ingresaste un valor inválido."
    }

}

console.log("-------EJERCICIO 1: totalAPagar()-------")
console.log( totalAPagar("moto", 40) )
console.log( totalAPagar("AUTOBUS", 125) )
console.log( totalAPagar("bicicleta", 20) )
console.log("")

console.log("-------EJERCICIO 2: Local de sándwiches-------")
console.log( seleccionSandwich(seleccionPan("blanco"), seleccionBase("pollo"), seleccionAdiciones(true, true, true, true, true, true)) )
console.log( seleccionSandwich(seleccionPan("frances"), seleccionBase("carne"), seleccionAdiciones(true, false, true, false, true, false)) )
console.log( seleccionSandwich(seleccionPan("sin gluten"), seleccionBase("veggie"), seleccionAdiciones(true, true, false, false, false, false)) )
console.log("")

console.log("-------EJERCICIO 3: El número secreto-------")
console.log( secretNumber(2) )
console.log( secretNumber(4) )
console.log( secretNumber(6) )
console.log("")

console.log("-------EJERCICIO 4: abrirParacaidas()-------")
console.log( abrirParacaidas(1000, 3500) )
console.log( abrirParacaidas(1500, 3000) )
console.log( abrirParacaidas(625, 2500) )
console.log("")

console.log("-------EJERCICIO 5: traductorCondicional()-------")
console.log( traductorCondicional("GeNiO") )
console.log( traductorCondicional("gato") )
console.log( traductorCondicional("perro") )
console.log("")

console.log("-------EJERCICIO 6: valoracionPelicula()-------")
console.log( valoracionPeliculas("Muy buena") )
console.log( valoracionPeliculas("Mala") )
console.log( valoracionPeliculas("Regular") )
console.log("")
