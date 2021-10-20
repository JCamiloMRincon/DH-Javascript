let notas = [3, 5, 10, 9, 7, 8, 8, 8];

// Ejemplo push

notas.push(1);
notas.push(2);
notas.push(4);

// Ejemplo pop

let elUltimo = notas.pop();

console.log( notas )
console.log( elUltimo )

notas = [3, 5, 10, 9, 7, 8, 8, 8];

// Ejemplo shift

notas.shift();
notas.shift();

// Ejemplo unshift

notas.unshift(1);

console.log( notas )

notas = [3, 5, 8, 10, 9, 7, 8, 8];

let posicionDelOcho = notas.indexOf(9);
console.log( posicionDelOcho );

let resultadoJuntos = notas.join('**');
console.log( resultadoJuntos );

let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]

console.log( estudiantes );

estudiantes.push(
    {
        nombre: 'Juan',
        promedio : 5,
        curso : 'iOS',
    },
    {
        nombre: 'Miguel',
        promedio : 2,
        curso : 'Android',
    }
);

console.log( estudiantes );

