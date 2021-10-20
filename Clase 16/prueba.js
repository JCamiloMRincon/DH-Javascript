let fs = require('fs');

// fs.appendFileSync('prueba.txt', 'EL FINAL');
let texto = fs.readFileSync('prueba.txt', {encoding: 'utf-8'});

console.log(texto)