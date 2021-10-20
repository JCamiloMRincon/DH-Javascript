// Ejemplo de length

let mensaje = "Gran día para practicar Javascript!";
console.log( mensaje.length );

// Ejemplo de indexOf

console.log( mensaje.indexOf("día") );

// Ejemplo de slice

console.log( mensaje.slice(0, 24) );
console.log( mensaje );

let frase = "Breaking Bad rules!";
console.log( frase.slice(-10) );

// Ejemplo de trim

let otroMensaje = "       Gran día para practicar Javascript!    ";
console.log( otroMensaje );
console.log( otroMensaje.trim() );

// Ejemplo de split

console.log( mensaje.split(" ") );

// Ejemplo de replace

console.log( mensaje.replace("Javascript", "todo") );
console.log( mensaje );
