// map() = [1,2,3] => [3,4,5]
// filter() = [5,11,12] => [5]
// forEach() => console.log() [1,2,3] => [3,4,5]
// find() => [2,4,6,7,9] => 7
// slice() => [1,2,3,4,5,6,7,8,9] => [1,2,3,4,5]
// splice() => [1,2,3,4,5,6] => [1,2,7,8,9,5,6]
// sort() => [b,a,c] => [a,b,c]; [10,5,25] => [5,10,25]
// reduce() => [1,4,5,8] => 18

const archivo = require('./readWrite');

let arrayAutos = archivo.leerJson('autos');

console.log("---EJERCICIO 1.---")
console.log(arrayAutos)

let carrera = {

    autos: arrayAutos,
    autosPorTanda: 6,

    autosHabilitados: function() {
        //return this.autos.filter(function(vehiculo) {
        //    return vehiculo.sancionado == false
        //})
        return this.autos.filter(vehiculo => vehiculo.sancionado == false)
    },
//autosHabilitados = [{},{},{},{},{},{},{},{},{},{}]

    listarAutos: function(array) {
        array.forEach(vehiculo => console.log(`Piloto: ${vehiculo.piloto}, patente: ${vehiculo.patente}, peso en kg: ${vehiculo.peso} , estado: ${vehiculo.sancionado ? "sancionado" : "habilitado"}`))
    },

    buscarPorPatente: function(patenteABuscar) {
        return this.autos.find(vehiculo => vehiculo.patente == patenteABuscar);
    },

    filtrarPorCilindrada: function(cilindradaMaxima) {
        let vehiculosHabilitados = this.autosHabilitados();
        return vehiculosHabilitados.filter(vehiculo => vehiculo.cilindrada <= cilindradaMaxima) 
    },

    ordenarPorVelocidad: function() {
        return this.autos.sort((vehiculo1, vehiculo2) => vehiculo1.velocidad - vehiculo2.velocidad);
    },

    habilitarVehiculo: function(patenteABuscar) {
        let autoEncontrado = this.autos.find(vehiculo => vehiculo.patente == patenteABuscar);

        if (autoEncontrado !== undefined) {
            autoEncontrado.sancionado = false;
            archivo.escribirJson('autos', this.autos)
            return autoEncontrado
        } else {
            return autoEncontrado
        }

    },

    generarTanda: function(cilindradaMaxima, pesoMaximo) {
        let vehiculosHabilitados = this.autosHabilitados()
        let vehiculosAptos = vehiculosHabilitados.filter(vehiculo => vehiculo.cilindrada <= cilindradaMaxima && vehiculo.peso <= pesoMaximo)
        
        if (vehiculosAptos.length > this.autosPorTanda) {
            return vehiculosAptos.slice(0, this.autosPorTanda)
        } else {
            return vehiculosAptos
        }

    },

    pesoPromedio: function(cilindradaMaxima, pesoMaximo) {
        let tanda = this.generarTanda(cilindradaMaxima, pesoMaximo);
        return tanda.reduce((acumulador, vehiculo) => acumulador + vehiculo.peso, 0) / tanda.length
    },

    listarPodio: function(array) {
        let autosOrdenados = array.sort((vehiculo1, vehiculo2) => vehiculo2.puntaje - vehiculo1.puntaje);
        console.log(`El ganador es: ${autosOrdenados[0].piloto}, con un puntaje de ${autosOrdenados[0].puntaje}.`);
        console.log(`El segundo puesto es para ${autosOrdenados[1].piloto}, con un puntaje de ${autosOrdenados[1].puntaje}.`);
        console.log(`El tercer puesto es para ${autosOrdenados[2].piloto}, con un puntaje de ${autosOrdenados[2].puntaje}.`);
        return "";
    },

}

console.log("---EJERCICIO 2.A.---")
console.log(carrera.autos)

console.log("---EJERCICIO 2.C.---")
console.log(carrera.autosHabilitados());

console.log("---EJERCICIO 2.D.---")
console.log(carrera.listarAutos(arrayAutos));

console.log("---EJERCICIO 2.E.---")
console.log(carrera.buscarPorPatente('XYZ1234'));

console.log("---EJERCICIO 2.F.---")
console.log(carrera.filtrarPorCilindrada(2000));

console.log("---EJERCICIO 2.G.---")
console.log(carrera.ordenarPorVelocidad());

console.log("---EJERCICIO 2.H.---")
console.log(carrera.habilitarVehiculo('ABCJHV223'));

console.log("---EJERCICIO 2.I.---")
console.log(carrera.generarTanda(2000, 2000));

console.log("---EJERCICIO 2.J.---")
console.log(carrera.pesoPromedio(2000, 2000));

console.log("---EJERCICIO 2.K.---")
console.log(carrera.listarPodio(carrera.generarTanda(2000, 2000)));