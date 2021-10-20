// Funciones expresadas
let saludarE = function() { return "¡Hola humano!" }

// Funciones declaradas
function saludarD(nombre) { return nombre }

console.log(typeof(saludarD()))
console.log(typeof(saludarE()))

// Template literal
console.log(`Hola ${saludarD("Camilo")} un gusto conocerte`)

console.log(saludarE())