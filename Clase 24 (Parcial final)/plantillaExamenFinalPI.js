const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Juan Camilo Mórtigo Rincón";
const tema = "TEMA 2";

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

const archivo = require('./jsonHelper');

// A
const gestionDePeliculas = {

    // B
    peliculas: archivo.leerJson('peliculas'),
    
    // C
    listarPeliculas: function(array) {
        array.forEach(pelicula => console.log(`${pelicula.titulo}, de ${pelicula.director}. Duración: ${pelicula.duracion} minutos, ${pelicula.genero}, (${pelicula.calificacionIMDB} / 10 en IMDB)`));
    },
    
    // D
    buscarPorId: function(idABuscar) {
        return this.peliculas.find(pelicula => pelicula.id === idABuscar);
    },
    
    // E
    peliculasPorGenero: function(generoDeseado) {
        return this.peliculas.filter(pelicula => pelicula.genero === generoDeseado);
    },
    
    // F
    filtrarPorCalificacion: function(calificacionMin, calificacionMax) {
        return this.peliculas.filter(pelicula => pelicula.calificacionIMDB >= calificacionMin && pelicula.calificacionIMDB <= calificacionMax);
    },
    
    // G
    ordenarPorDuracion: function() {
        return this.peliculas.sort((pelicula1, pelicula2) => pelicula2.duracion - pelicula1.duracion);
    },
    
    // H
    duracionPromedio: function() {
        let promedio = this.peliculas.reduce((acum, pelicula) => acum + pelicula.duracion, 0) / this.peliculas.length;
        return `El promedio de duración de las películas es de: ${promedio} minutos`;
    },
    
    // I
    modificarGeneroPorId: function(idABuscar, nuevoGenero) {
        let peliculaAModificar = this.buscarPorId(idABuscar);
        if (peliculaAModificar !== undefined) {
            peliculaAModificar.genero = nuevoGenero;
            archivo.escribirJson('peliculas', this.peliculas);
        }
        return peliculaAModificar;
    },

}
/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculas);
console.log(o);

console.log(v, oo + " .D. Buscar");
console.log(gestionDePeliculas.buscarPorId(10));
console.log(o);

console.log(v, oo + " .E. Filtrar 1");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculasPorGenero('Horror'));
console.log(o);

console.log(v, oo + " .F. Filtrar 2");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.filtrarPorCalificacion(6,8));
console.log(o);

console.log(v, oo + " .G. Ordenar");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.ordenarPorDuracion());
console.log(o);

console.log(v, oo + " .H. Duracion");
console.log(gestionDePeliculas.duracionPromedio());
console.log(o);

console.log(v, oo + " .I. Modificar Propiedad");
console.log(gestionDePeliculas.modificarGeneroPorId(10, 'Horror'));
console.log(gestionDePeliculas.buscarPorId(10));
console.log(o);
