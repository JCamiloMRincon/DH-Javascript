// ¿Qué devuelven estos códigos?

// let numbers = [22, 33, 54, 66, 72];
// console.log( numbers[numbers.length] );

// let grupoDeAmigos = [ 
//     ["Harry", "Ron", "Hermione"], 
//     ["Spiderman", "Hulk", "Ironman"], 
//     ["Penélope Glamour", "Pierre Nodoyuna","Patán"] 
// ];
// console.log( grupoDeAmigos[1][0] );

// let str = "un string cualquiera";
// let grupoDeAmigos = [ 
//     [45, 89, 0], 
//     ["Digital", "House", true], 
//     ["string", "123", "false", 54, true, str] 
// ];
// console.log( grupoDeAmigos[2][grupoDeAmigos[2].length - 3] );

// Colecciones de películas y más

// 1. Crear la estructura adecuada para guardar las películas.

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
console.log( peliculas[4] );

// 2. Convertir las películas a mayúscula.

function mayuscula( array ) {
    
    let cadena = array.join();
    cadena = cadena.toUpperCase();
    return cadena.split(",")

}

// console.log( mayuscula(peliculas) );

// 3. Agregar las nuevas películas al array principal de pel

let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function unirArrays( primerArray, segundoArray ) {
    
    return segundoArray.concat(primerArray);

}

peliculas = unirArrays( mayuscula(peliculas), mayuscula(peliculasAnimadas) );
console.log( peliculas );

// 4. Eliminar Fortnite de la lista de películas

// function eliminar( array, index ) {
    
//     valorEliminado = array.splice(index, 1);
//     return array;

// }

// console.log( eliminar( peliculas, peliculas.indexOf("FORTNITE") ) );

// 5. Comparación de calificaciones

// let asiaScore = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// let euroScore = [8, 10, 6, 8, 10, 6, 7, 9, 5];

// function comparar( array1, array2 ) {
    
//     let comparacion = [];
//     for (var i = 0; i < array1.length; i++) {
//         array1[i] == array2[i] ? comparacion.push("iguales"): comparacion.push("diferentes")
//     }
//     return comparacion

// }

// console.log( comparar( asiaScore, euroScore ) );