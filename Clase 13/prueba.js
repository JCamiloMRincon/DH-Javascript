let fs = require('fs');

let contenidoJSON = fs.readFileSync('prueba.txt', {encoding: 'utf-8'});
let contenido = JSON.parse(contenidoJSON);

console.log(contenido)