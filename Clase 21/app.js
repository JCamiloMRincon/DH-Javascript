/* 1. Como primer paso necesitarás requerir él módulo lecturaEscritura y asignarlo a una variable para poder utilizar sus funcionalidades, además de hacer la lectura del archivo departamentos.json, en detalle: 
- Requerir módulo lecturaEscritura y asignarlo a una variable llamada por ejemplo archivos, esta contendrá los métodos del módulo requerido de ahora en más. */

let archivos = require('./lecturaEscritura');

/* - Leer él archivo departamentos.json utilizando la variable archivos creada anteriormente con él método adecuado y asignar a una variable llamada arrayDepartamentos. */
let arrayDepartamentos = archivos.leerJson('departamentos');

/* - Comprobar los pasos anteriores imprimiendo la variable arrayDepartamentos. */
console.log("---EJERCICIO 1.---")
console.log(arrayDepartamentos);

/* 2. Crear un objeto literal, que podemos llamar inmobiliaria, será nuestra representación de la inmobiliaria con su datos (propiedades) y sus funcionalidades. (métodos) */
let inmobiliaria = {

    /* 2.A. Agregar una propiedad llamada departamentos que contenga él arrayDepartamentos obtenido en el punto anterior. */
    departamentos: arrayDepartamentos,

    /* 2.B. Agregar un método listarDepartamentos que reciba como parámetro un array de departamentos y los imprima por consola. 
    Este método deberá imprimir por cada elemento:
    - El id.
    - El precioAlquiler.
    - disponible (en caso de ser true mostrar “Disponible” caso contrario “Alquilado”)
    - La cantidad de ambientes
    - ej: "id: 2, precio $ 7500, está Disponible, 4 ambientes". */
    listarDepartamentos: function(array) {    
        array.forEach(depto => console.log(`id: ${depto.id}, precio ${depto.precioAlquiler}, ${depto.disponible ? "está Disponible" : "no está Disponible"}, ${depto.ambientes} ambientes`));   
    },

    /* 2.C. Agregar un método buscarPorId que permita buscar un departamento en función de su id. 
    - Este método recibirá por parámetro un number que representa él id del departamento a buscar.
    - En caso de encontrar un departamento con él id buscado, devolverá el objeto literal que lo representa.- En caso contrario devolverá undefinded. */
    buscarPorId: function(number) {       
        return this.departamentos.find(depto => depto.id === number);
    },

    /* 2.D. Agregar un método departamentosNoDisponibles que permite filtrar departamentos cuando su propiedad disponible sea igual a false, esto quiere decir que están alquilados. 
    - Este método devolverá un array con todos los departamentos que cumplan la condición mencionada.
    - En caso de no encontrar ningún que cumpla con la condición, devolverá un array vacío. */
    departamentosNoDisponibles: function() {
        return this.departamentos.filter(depto => depto.disponible === false);
    },

    /* 2.E. Agregar un método departamentosDisponibles que permite filtrar departamentos cuando su propiedad disponible sea igual a true. 
    - Este método devolverá un array con todos los departamentos que cumplan la condición mencionada.
    - En caso de no encontrar ningún que cumpla con la condición, devolverá un array vacío. */
    departamentosDisponibles: function() {        
        return this.departamentos.filter(depto => depto.disponible);
    },

    /* 2.F. Agregar un método filtrarPorAmbientes que permite filtrar departamentos, siempre y cuando su propiedad ambientes sea mayor o igual a una cantidad enviada como argumento. 
    - Este método recibirá por parámetro un number que represente la cantidad de  ambientes mínimo.
    - Este método devolverá un array con todos los departamentos que cumplan con la condición mencionada.
    - En caso de no encontrar ningún departamento que cumpla con la condición, devolverá un array vacío. */
    filtrarPorAmbientes: function(cantidadAmbientes) {
        return this.departamentos.filter(depto => depto.ambientes >= cantidadAmbientes);
    },

    /* 2.G. Agregar un método filtrarPorPrecio que permite filtrar departamentos, siempre y cuando su propiedad precioAlquiler sea menor o igual a él precio enviado como argumento. 
    - Este método recibirá por parámetro un number que represente él precioAlquiler máximo.
    - Este método devolverá un array con todos los departamentos que cumplan con la condición mencionada.
    - En caso de no encontrar ningún departamento que cumpla con la condición, devolverá un array vacío.
    - Este método debe usar departamentosDisponibles, para buscar incluir solamente aquellos departamentos que estén disponibles. */
    filtrarPorPrecio: function(precioMaximo) {
        return this.departamentos.filter(depto => depto.precioAlquiler <= precioMaximo);
    },

    /* 2.H. Agregar un método rebajarPrecioAlquiler que modifique él valor de precioAlquiler de los departamentos No Alquilados. 
    - Este método debe usar departamentosDisponibles, para buscar incluir solamente aquellos departamentos que estén disponibles, es decir, que no estén Alquilados.
    - Este método recibirá por parámetro un number que represente él porcentaje que se desea rebajar a los departamentos no alquilados por ejemplo un 3%.
    - Este método devolverá un array con todos los departamentos que sufrieron la modificación del precioAlquiler.
    - Este método debe realizar una persistencia de información, para esto utilizaremos él método escribirJson de nuestro objeto requerido en él primero punto. */
    rebajarPrecioAlquiler: function(porcentaje) {       
        let arrayDisponibles = this.departamentosDisponibles();
        arrayDisponibles.map(depto => depto.precioAlquiler *= (1 - (porcentaje / 100)));
        archivos.escribirJson('departamentos', this.departamentos);
        return this.departamentos;
    },

    /* 2.I. Agregar un método calcularRecaudación que calcule él valor que se depositará en caja tomando en cuenta él precioAlquiler de los departamentos Alquilados. 
    - Este método devolverá un valor que represente la recaudación total.
    - Este método debe usar departamentosNoDisponibles, para buscar incluir solamente aquellos departamentos que estén no disponibles, es decir, Alquilados.*/
    calcularRecaudacion: function() {        
        let arrayAlquilados = this.departamentosNoDisponibles();
        return arrayAlquilados.reduce(
            (acumulador, precioDepto) => acumulador + precioDepto.precioAlquiler, 0
        );
    },

    /* 2.J. Agregar un método ordenarPorPrecio que ordene los departamentos de menor a mayor según su precio.
    - El método recibirá como parámetro un array de departamentos. 
    - Este método devolverá un array con todos los departamentos ordenados por precio. */
    ordenarPorPrecio: function(array) {
        return array.sort(
            (depto1, depto2) => depto1.precioAlquiler - depto2.precioAlquiler
        );
    },

}

console.log("---EJERCICIO 2.B.---");
console.log(inmobiliaria.listarDepartamentos(arrayDepartamentos));

console.log("---EJERCICIO 2.C.---");
console.log(inmobiliaria.buscarPorId(10));

console.log("---EJERCICIO 2.D.---");
console.log(inmobiliaria.departamentosNoDisponibles());

console.log("---EJERCICIO 2.E.---");
console.log(inmobiliaria.departamentosDisponibles());

console.log("---EJERCICIO 2.F.---");
console.log(inmobiliaria.filtrarPorAmbientes(4));

console.log("---EJERCICIO 2.G.---");
console.log(inmobiliaria.filtrarPorPrecio(50000));

console.log("---EJERCICIO 2.H.---");
// console.log(inmobiliaria.rebajarPrecioAlquiler(10));

console.log("---EJERCICIO 2.I.---");
console.log(inmobiliaria.calcularRecaudacion());

console.log("---EJERCICIO 2.J.---");
console.log(inmobiliaria.ordenarPorPrecio(arrayDepartamentos));
