const { findSourceMap } = require("module");
const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");

//A

let primerosCincoProfesionales = arrayProfesionales.slice(0, 5);
console.log("---EJERCICIO A---");
console.log(primerosCincoProfesionales);

//B

let nuevoProfesional = {
    identificador: 250,
    estaHabilitado: true,
    honorarioConsulta: 8000,
    edad: 52,
    nombre: 'Linus Torvalds',
    especialidad: 'Junior Developer',
    cantidadConsultas: 48,
    puntuacion: 50
};

arrayProfesionales.splice(14, 1, nuevoProfesional);
console.log("---EJERCICIO B---");
console.log(arrayProfesionales);

//C

arrayProfesionales.sort(
    function(objeto1, objeto2) {
        return objeto1.honorarioConsulta - objeto2.honorarioConsulta;
    }
);

console.log("---EJERCICIO C---");
console.log(arrayProfesionales);

//D

let trabajadorQuince = arrayProfesionales.find(
    function(profesional) {
        return profesional.identificador === 15;
    }
);

console.log("---EJERCICIO D---");
console.log(trabajadorQuince);
