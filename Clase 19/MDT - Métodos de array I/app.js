const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");

//A
/* Utilizar un método de array que permita recorrer todo el arrayProfesionales proporcionado en él archivo app.js y en cada iteración realizaremos la impresión de dos propiedades de cada objeto en cuestión nombre - especialidad. */

console.log("---EJERCICIO A---");

arrayProfesionales.forEach( function(profesional) {
    console.log('"' + profesional.nombre + ' - ' + profesional.especialidad + '"');
} );

//B
/*Utilizar un método de array que permita recorrer todo el arrayProfesionales y modificar de cada uno la propiedad honorarioConsulta incrementado el valor de la misma en un 5%, luego imprimir el arrayProfesionales para ver la modificación realizada. */

let consultaCincoPorCiento = arrayProfesionales.map( profesional => {
    profesional.honorarioConsulta *= 1.05;
    return profesional
} ); 

console.log("---EJERCICIO B---");
console.log(consultaCincoPorCiento);

//C
/* Utilizar un método de array que permite recorrer todo el array de profesionales y  retornar profesionales deshabilitados, es decir,  filtrar por la propiedad estaHabilitado cuando esta sea false, guardar el retorno de este filtro en una variable profesionalesDeshabilitados e imprimir la misma para verificar los objetos filtrados. */

let profesionalesDeshabilitados = arrayProfesionales.filter(
    profesional => profesional.estaHabilitado === false );

console.log("---EJERCICIO C---");
console.log(profesionalesDeshabilitados);

//D
/*  Utilizar un método de array que permite recorrer todo el array de profesionales y  retornar profesionales habilitados, es decir,  filtrar por la propiedad estaHabilitado cuando esta sea true, guardar el retorno de este filtro en una variable profesionalesHabilitados e imprimir la misma para verificar los objetos filtrados. */

let profesionalesHabilitados = arrayProfesionales.filter(
    profesional => profesional.estaHabilitado === true );

console.log("---EJERCICIO D---");
console.log(profesionalesHabilitados);

//E
/* Utilizar un método de array que permite recorrer todo el array de profesionales y  retornar profesionales cuya especialidad sea Arquitecto, es decir,  filtrar por la propiedad especialidad cuando esta sea igual  a ‘Arquitecto’, guardar el retorno de este filtro en una variable arquitectos e imprimir la misma para verificar los objetos filtrados. */

let arquitectos = arrayProfesionales.filter(
    profesional => profesional.especialidad === "Arquitecto" );

console.log("---EJERCICIO E---");
console.log(arquitectos);

//F
/* Utilizar un método de array que permita recorrer todo el array y modificar de cada uno la propiedad estaHabilitado a true, se recomienda utilizar la variable obtenida del punto C, es decir la variable profesionalesDeshabilitados , imprimir el resultado de este método. */

profesionalesDeshabilitados.map(
    profesional => profesional.estaHabilitado = true
);

console.log("---EJERCICIO F---");
console.log(profesionalesDeshabilitados);

//G 
/* Ahora necesitamos obtener un valor que nos indique la cantidad de consultas atendidas por todos los profesionales, para ello utilizaremos un método de array nos facilite esto, asignamos él retorno de este método en una variable llamada cantidadTotalConsultas, luego imprimir la misma. */

let cantidadTotalConsultas = arrayProfesionales.reduce(
    (acumulador, valorActual) => acumulador + valorActual.cantidadConsultas, 0
);

console.log("---EJERCICIO G---");
console.log(cantidadTotalConsultas);

//H
/* Utilizar un método de array, que nos permita retornar un nuevo array de objetos literales únicamente con las propiedades nombre, especialidad y recaudación que será él resultado de multiplicar las propiedades cantidadConsulta * honorarioConsulta, asignar él retorno de este método a una variable arrayRecaudacion e imprimir la misma. */

let arrayRecaudacion = arrayProfesionales.map(
    function(profesional) {
        let newObj = {};
        newObj.nombre = profesional.nombre;
        newObj.especialidad = profesional.especialidad;
        newObj.recaudacion = profesional.cantidadConsultas * profesional.honorarioConsulta
        return newObj;
    }
);

console.log("---EJERCICIO H---");
console.log(arrayRecaudacion);