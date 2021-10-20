let fs = require('fs');
let heroes = require('./superheroes');

let datos = fs.readFileSync(__dirname + '/prueba.txt','utf-8');

console.log(datos)
console.log(heroes)
