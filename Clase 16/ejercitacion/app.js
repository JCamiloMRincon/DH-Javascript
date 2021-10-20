let jsonFunctions = require("./read-write");
let NewAuto = require("./newAuto");

const concesionaria = {

    autos: jsonFunctions.leerJSON('/AUTOS.json'),

    agregarAuto: function(marcaNuevo, modeloNuevo, añoNuevo, precioNuevo, patenteNuevo) {
        
        let newVehicle = new NewAuto(marcaNuevo, modeloNuevo, añoNuevo, precioNuevo, patenteNuevo); 
        
        this.autos.push(newVehicle);
        jsonFunctions.escribirJSON('./AUTOS.json', this.autos);
        
        return "Vehículo agregado correctamente";

    },

    venderAuto: function(patente) {
        
        let seleccionado;

        for (let i = 0; i < this.autos.length; i++) {
            
            if (this.autos[i].patente === patente) {
                
                this.autos[i].vendido = true;
                seleccionado = this.autos[i];               
                jsonFunctions.escribirJSON('./AUTOS.json', this.autos);
                return "El vehículo: " + seleccionado.marca + " " + seleccionado.modelo + " ha sido vendido"
            
            }

        }

    },

    totalDeVentas: function() {

        let precioTotal = 0;

        for (let i = 0; i < this.autos.length; i++) {
            
            if (this.autos[i].vendido === true) {
                precioTotal += this.autos[i].precio;
            }

        }

        return precioTotal;

    },

    eliminarAuto: function(patente) {

        let autoEliminar = {};

        for (let i = 0; i < this.autos.length; i++) {
            
            if (this.autos[i].patente === patente) {
                autoEliminar = this.autos[i]
                let ubicacionAutoEliminar = this.autos.indexOf(autoEliminar);
                this.autos.splice(ubicacionAutoEliminar, 1);
                jsonFunctions.escribirJSON('./AUTOS.json', this.autos);
                return "El vehículo con patente: " + patente + " se eliminó satisfactoriamente."
            }

        }

    },

}

// Mostrar la lista de autos actual.
console.log( concesionaria.autos );
// Crear un auto nuevo.
// console.log( concesionaria.agregarAuto('Chevrolet', 'Corvette', 2006, 999999, 'RZO503'));

