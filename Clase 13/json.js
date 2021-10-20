let amigos = ["Coco", "Pablito", "Sus", "Franco"];

console.log( amigos )

let amigosJSON = JSON.stringify( amigos );

console.log( amigosJSON );

let amigosOriginal = JSON.parse( amigosJSON );

console.log( amigosOriginal );

let persona = {
    nombre: "Carly",
    edad: 26,
    domicilio: "Calle Falsa 123",
}

console.log( persona );

let personaJSON = JSON.stringify( persona );

console.log( personaJSON );

let personaOriginal = JSON.parse( personaJSON );

console.log( personaOriginal )