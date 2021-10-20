const peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
const peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
const asiaScore = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScore = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function pasarAMayuscula( array ) {
    
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();
    }

    return array
}

console.log("---EJERCICIO 1---")
console.log(pasarAMayuscula(peliculas))

function agregarArray( array1, array2 ) {

    for (let j = array2.length; j > 0; j--) {
        array1.unshift(array2[j-1]);
    }
    
    return array1;

}

peliculasCompletas = agregarArray(pasarAMayuscula(peliculas), pasarAMayuscula(peliculasAnimadas))
console.log("---EJERCICIO 2---")
console.log( peliculasCompletas )

function eliminarInfiltrado( array, index ) {
    
    valorEliminado = array.splice(index, 1);
    return array;

}

console.log("---EJERCICIO 3---")
console.log( eliminarInfiltrado(peliculasCompletas, peliculasCompletas.indexOf("FORTNITE")) );

function comparar( array1, array2 ) {
    
    let comparacion = [];
    
    for (var i = 0; i < array1.length; i++) {
        array1[i] == array2[i] ? comparacion.push("iguales"): comparacion.push("diferentes")
    }

    return comparacion

}

console.log("--EJERCICIO 4---")
console.log( comparar( asiaScore, euroScore ) );

const participanteA = [5, 8, 4, 9, 5];
const participanteB = [8, 7, 8, 6, 8];
const participanteC = [7, 5, 10, 8, 3];

function puntajePromedio( array ) {

    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }

    return suma / array.length;

}

console.log("---EJERCICIO BONUS 1---")
console.log( puntajePromedio(participanteA) );
console.log( puntajePromedio(participanteB) );
console.log( puntajePromedio(participanteC) );

function puntajeMayor ( array ) {

    for (let i = 0; i < array.length; i ++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {
                let auxiliar = array[i];
                array[i] = array[j];
                array[j] = auxiliar;
            }
        }
    }

    return array[0];

}

console.log("---EJERCICIO BONUS 2---")
console.log( puntajeMayor(participanteA) );
console.log( puntajeMayor(participanteB) );
console.log( puntajeMayor(participanteC) );

function competencia( array1, array2, array3 ) {

    const resultadoArray1 = [puntajePromedio(array1), puntajeMayor(array1)];
    const resultadoArray2 = [puntajePromedio(array2), puntajeMayor(array2)];
    const resultadoArray3 = [puntajePromedio(array3), puntajeMayor(array3)];

    let resultadoFinal = ["GANADOR MODALIDAD PROMEDIO: ", "GANADOR MODALIDAD MAYOR: "];

    for (let index = 0; index < resultadoFinal.length; index++) {
        if (resultadoArray1[index] > resultadoArray2[index] && resultadoArray1[index] > resultadoArray3[index]) {
            resultadoFinal[index] =  resultadoFinal[index] + "Participante A"
        } else if (resultadoArray2[index] > resultadoArray1[index] && resultadoArray2[index] > resultadoArray3[index]) {
            resultadoFinal[index] =  resultadoFinal[index] + "Participante B"
        } else if (resultadoArray3[index] > resultadoArray1[index] && resultadoArray3[index] > resultadoArray2[index]) {
            resultadoFinal[index] =  resultadoFinal[index] + "Participante C"
        } else {
            resultadoFinal[index] =  resultadoFinal[index] + "Hubo empate"
        }
    }
    
    return resultadoFinal;

}

console.log("---EJERCICIO BONUS 3---")
console.log( competencia(participanteA, participanteB, participanteC) );