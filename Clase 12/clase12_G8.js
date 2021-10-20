const a = ['Alicia', 12, 69, 32];
const b = ['Bob', 13, 67, 43];
 
 function encontrarGanador(a, b) 
 {
    let puntosPrimerParticipante = 0;
    let puntosSegundoParticipante = 0;

    for (let i = 0;i < a.length; i++) {
        if (a[i] > b[i]) {
            puntosPrimerParticipante++;
        } else if(a[i] < b[i]) {
            puntosSegundoParticipante++;
        }
    }

    if (puntosPrimerParticipante > puntosSegundoParticipante) {
        return a[0];
    } else if(puntosPrimerParticipante < puntosSegundoParticipante) {
        return b[0];
    } else {
        return "empate";
    }
 }

 console.log("El ganador es el participante: " + encontrarGanador(a, b));

 //EXTRA
 function digitalHouse( num1, num2 ){
     
    for (let i = 1; i <= 100; i++) {
        
        if (i % num1 === 0 && i % num2 === 0) {
            console.log("Digital House");
        } else if(i % num1 === 0) {
            console.log("Digital");
        } else if(i % num2 === 0) {
            console.log("House");
        } else {
            console.log(i);
        }

    }
 }

digitalHouse(10,11);

function sumArray( array ) {

    let total = 0;
    
    for (let index = 0; index < array.length; index++) {
        total += array[index];
    }

    return total;

}

console.log( sumArray([1,21,456,123]) )

function arrayJoin( array ) {

    let palabra = "";
    
    for (let index = 0; index < array.length; index++) {
        palabra = palabra + array[index];
    }

    return palabra;

}

console.log( arrayJoin(["h","o","l","a"," ","m","u","n","d","o"]) )