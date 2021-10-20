const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

const jsonHelper = require('./jsonHelper');
const arrayBicicletas = jsonHelper.leerJson('bicicletas');

// A
const carrera = {

// B
    bicicletas: arrayBicicletas,

// C
    bicicletasPorTanda: 4,

// D
    ciclistasHabilitados: function() {
        return this.bicicletas.filter(ciclista => !ciclista.dopaje)
    },

// E
    listarBicicletas: function(array) {
        array.forEach(ciclista => console.log(`Ciclista: ${ciclista.ciclista}, marca: ${ciclista.marca},  rodado: ${ciclista.rodado}, peso: ${ciclista.peso} kg, largo: ${ciclista.largo} cm, estado: ${ciclista.dopaje ? "inhabilitado" : "habilitado"}.`));
    },

// F
    buscarPorId: function(idABuscar) {
        return this.bicicletas.find(ciclista => ciclista.id === idABuscar);
    },

// G
    filtrarPorPeso: function(pesoMaximo) {
        let habilitados = this.ciclistasHabilitados();
        return habilitados.filter(ciclista => ciclista.peso <= pesoMaximo);
    },

// H
    ordenarPorRodado: function() {
        return this.bicicletas.sort((ciclista1, ciclista2) => ciclista1.rodado - ciclista2.rodado);
    },

// I
    largoPromedio: function() {
        return (this.bicicletas.reduce((acum, ciclista) => acum + ciclista.largo, 0) / this.bicicletas.length).toFixed(2);
    },

// J
    aumentarPeso: function(pesoAumentar, idBici) {
        let bici = this.buscarPorId(idBici);
        if (bici !== undefined) {
            bici.peso += pesoAumentar;
            jsonHelper.escribirJson('bicicletas', this.bicicletas);
        }
        return bici;
    },

// K
    generarTanda: function(rodadoMaximo, pesoMinimo) {
        let tanda = this.ciclistasHabilitados().filter(ciclista => ciclista.rodado <= rodadoMaximo && ciclista.peso >= pesoMinimo);
        return tanda.slice(0, this.bicicletasPorTanda);
    },

// L
    calcularPodio: function(array) {
        let ordenados = array.sort((ciclista1, ciclista2) => ciclista2.puntaje - ciclista1.puntaje);
        console.log(`El ganador es: ${ordenados[0].ciclista}, con un puntaje de ${ordenados[0].puntaje}.`);
        console.log(`El segundo puesto es para ${ordenados[1].ciclista}, con un puntaje de ${ordenados[1].puntaje}.`);
        console.log(`El tercer puesto es para ${ordenados[2].ciclista}, con un puntaje de ${ordenados[2].puntaje}.`);
    },

}
/******************************/
/* Ejecución de las consignas */
/******************************/

console.log(v, "\n" + oo + " .D. ");
console.table(carrera.ciclistasHabilitados());
console.log(o);

console.log(v, oo + " .E.");
carrera.listarBicicletas(arrayBicicletas);
console.log(o);

console.log(v, oo + " .F.");
console.log(carrera.buscarPorId(1));
console.log(o);

console.log(v, oo + " .G.");
console.table(carrera.filtrarPorPeso(8));
console.log(o);

console.log(v, oo + " .H.");
console.table(carrera.ordenarPorRodado());
console.log(o);

console.log(v, oo + " .I.");
console.log(carrera.largoPromedio());
console.log(o);

console.log(v, oo + " .J. ");
// console.log(carrera.aumentarPeso(12, 3))
console.log(o);

console.log(v, oo + " .K. ");
console.table(carrera.generarTanda(29, 4))
console.log(o);

console.log(v, oo + " .L. ");
carrera.calcularPodio(carrera.generarTanda(29, 4))
console.log(o);
