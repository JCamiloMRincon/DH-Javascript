const file = require('./readWrite');

/* 
● Leer el archivo utilizando el módulo correspondiente de Node.
● Parsearlo utilizando las herramientas que te provee Javascript
Resultado esperado: un array de objetos modificado correctamente para que
funcione con las herramientas de JavaScript. */
let arrayAutos = file.leerJson('autos');

/* 2. Crear un objeto literal que represente la carrera. Este objeto literal, que podemos llamar carrera, será nuestra representación de la carrera (valga la redundancia) con su datos (propiedades) y sus funcionalidades (métodos). */
let carrera = {

    /* 2.A. Agregar una propiedad llamada autos que contenga los autos obtenidos en el punto anterior. */
    autos: arrayAutos,

    /* 2.B. Agregar una propiedad llamada autosPorTanda que contenga el valor 6. Este valor representará la cantidad máxima de autos por tanda. */
    autosPorTanda: 6,

    /* 2.C. Agregar un método autosHabilitados, que retorne todos los autos habilitados, es decir, aquellos que no estén sancionados.
    ○ Este método no recibirá ningún parámetro.
    ○ Este método devolverá un array con los autos que estén habilitados para correr. */
    autosHabilitados: function() {       
        return this.autos.filter(vehiculo => !vehiculo.sancionado);
    },

    /* 2.D. Agregar un método listarAutos que reciba como parámetro un array de autos e imprima por consola la siguiente información:
    ○ El nombre piloto.
    ○ La placa o patente del auto.
    ○ El peso del auto.
    ○ El estado del piloto.
    i. “sancionado” → si sancionado es true
    ii. “habilitado” → sí sancionado es false
    PD: Este método deberá ser utilizado en la ejecución de los demás métodos que retornan un array de vehículos.
    Resultado esperado al ejecutar el método: un mensaje por consola por cada auto con el siguiente formato:
    Piloto: ______, patente: ______, peso en kg: ______, estado: ______.*/
    listarAutos: function(array) {
        array.forEach(vehiculo => console.log(`Piloto: ${vehiculo.piloto}, patente: ${vehiculo.patente}, peso en kg: ${vehiculo.peso}, estado: ${vehiculo.sancionado ? 'sancionado' : 'habilitado'}`));
    },

    /* 2.E. Agregar un método buscarPorPatente que permita buscar el auto en función de su patente.
    ○ Este método recibirá por parámetro un string que represente la patente a buscar
    ○ En caso de encontrar un auto con la patente buscada, devolverá el objeto literal que lo representa.
    ○ En caso contrario devolverá undefined */
    buscarPorPatente: function(patenteABuscar) {
        return this.autos.find(vehiculo => vehiculo.patente === patenteABuscar);
    },

    /* 2.F. Agregar un método filtrarPorCilindrada que permite filtrar los autos habilitados, siempre y cuando su propiedad cilindrada sea menor o igual a la cilindrada enviada como argumento.
    ○ Este método recibirá por parámetro un number que represente la cilindrada máxima a buscar.
    ○ Este método devolverá un array con todos los autos que cumplan con la condición mencionada.
    ○ En caso de no encontrar ningún auto, devolverá un array vacío.
    ○ Este método debe usar autosHabilitados para buscar incluir solamente aquellos autos que estén habilitados. */
    filtrarPorCilindrada: function(cilindradaMaxima) {
        let autosHabilitados = this.autosHabilitados();
        return this.listarAutos(
            autosHabilitados.filter(vehiculo => vehiculo.cilindrada <= cilindradaMaxima)
        );
    },

    /* 2.G. Agregar un método ordenarPorVelocidad que ordene los autos de menor a mayor según su velocidad.
    ○ Este método devolverá un array con todos los autos ordenados por velocidad. */
    ordenarPorVelocidad: function() {
        return this.autos.sort((vehiculo1, vehiculo2) => vehiculo1.velocidad - vehiculo2.velocidad);
    },

    /* 2.H. Agregar un método habilitarVehiculo que permita premiar un vehículo en función de su título y guardar los cambios en el archivo JSON.
    ○ Este método recibirá por parámetro un string que represente la patente a buscar
    ○ En caso de encontrar un auto con la patente buscada:
    i. Cambiará el valor de la propiedad sancionado a false.
    ii. Escribirá los cambios en el archivo JSON que contiene los vehículos.
    iii. Devolverá el auto modificado
    ○ En caso contrario devolverá undefined */
    habilitarVehiculo: function(patenteAModificar) {
        let autoEncontrado = this.autos.find(vehiculo => vehiculo.patente === patenteAModificar);
        
        if (autoEncontrado !== undefined) {
            autoEncontrado.sancionado = false;
            file.escribirJson('autos', this.autos);
            return autoEncontrado;
        }

        return autoEncontrado;       
    },

    /* 2.I. Agregar un método generarTanda que permita retornar un array de autos, que cumplan con las siguientes condiciones:
    ○ Su piloto está habilitado. 
    ○ Su cilindrada sea menor o igual al valor enviado como argumento.
    ○ Su peso sea menor o igual a un valor enviado como argumento.
    ○ La cantidad devuelta sea como máximo la expresada en la propiedad autosPorTanda.
    Para este método vamos a dejar que vos determines los parámetros que debería recibir. */
    generarTanda: function(cilindradaMaxima, pesoMaximo) {
        let competidores = this.autosHabilitados().filter(
            vehiculo => vehiculo.cilindrada <= cilindradaMaxima && vehiculo.peso <= pesoMaximo
        );
        if (competidores.length <= this.autosPorTanda) {
            return competidores;
        } else {
            return competidores.slice(0, this.autosPorTanda);
        }
    },

    /* 2.J. Agregar un método llamado pesoPromedio, que me permita saber cual es el peso promedio de los vehículos que componen la tanda
    ○ El método deberá reutilizar autosPorTanda
    ○ Deberá retornar un mensaje indicando el peso promedio de los autos. */
    pesoPromedio: function(cilindradaMaxima, pesoMaximo) {
        let competidores = this.generarTanda(cilindradaMaxima, pesoMaximo);
        return competidores.reduce((acum, vehiculo) => acum + vehiculo.peso, 0) / competidores.length;
    },

    /* 2.K. Agregar un método listarPodio, que calcule el podio en función del puntaje de los pilotos y muestre el resultado por consola.
    ○ El método recibirá como parámetro un array de autos. Los mismos deberán ser generados con generarTanda.
    ○ El método ordenará por puntaje los autos recibidos.
    ○ El método imprimirá por consola los tres primeros puestos.
    Resultado esperado al ejecutar el método: un mensaje por consola por cada auto con el siguiente formato:
    El ganador es: ______, con un puntaje de ______.
    El segundo puesto es para ______, con un puntaje de ______.
    El tercer puesto es para ______, con un puntaje de ______. */
    listarPodio: function(array) {
        let competidores = array.sort((vehiculo1, vehiculo2) => vehiculo2.puntaje - vehiculo1.puntaje);
        let podio = competidores.slice(0,3);
        console.log(`El ganador es: ${podio[0].piloto}, con un puntaje de: ${podio[0].puntaje}`);
        console.log(`El segundo puesto es para: ${podio[1].piloto}, con un puntaje de: ${podio[1].puntaje}`);
        console.log(`El tercer puesto es para: ${podio[2].piloto}, con un puntaje de: ${podio[2].puntaje}`);
        return "";
    },

};

console.log('---EJERCICIO 1.---');
console.log(arrayAutos);

console.log('---EJERCICIO 2.C.---');
console.log(carrera.autosHabilitados());

console.log('---EJERCICIO 2.D.---');
console.log(carrera.listarAutos(arrayAutos));

console.log('---EJERCICIO 2.E.---');
console.log(carrera.buscarPorPatente('ABC123'));

console.log('---EJERCICIO 2.F.---');
console.log(carrera.filtrarPorCilindrada(1750));

console.log('---EJERCICIO 2.G.---');
console.log(carrera.ordenarPorVelocidad());

console.log('---EJERCICIO 2.H.---');
console.log(carrera.habilitarVehiculo('JQK433'));

console.log('---EJERCICIO 2.I.---');
console.log(carrera.listarAutos(carrera.generarTanda(2000, 2000)));

console.log('---EJERCICIO 2.J.---');
console.log(carrera.pesoPromedio(2000, 2000));

console.log('---EJERCICIO 2.K.---');
console.log(carrera.listarPodio(carrera.generarTanda(2000, 2000)));