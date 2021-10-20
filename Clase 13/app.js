let fs = require('fs');
let arrayCuentas = require('./cuentas/index');

let arrayCuentasJSON = JSON.stringify(arrayCuentas);

fs.writeFileSync('prueba.txt', arrayCuentasJSON);

let banco = {

    clientes: arrayCuentas,

    consultarCliente : function( titular ) {
        
        for (let i = 0; i < this.clientes.length; i++) {
            if (titular === this.clientes[i].titularCuenta) {
                return this.clientes[i]
            }
        }

        return "El cliente no existe"
    },

    deposito : function( titular, cantidadDinero ) {
        
        for (let i = 0; i < this.clientes.length; i++) {
            if (titular === this.clientes[i].titularCuenta) {
                this.clientes[i].saldoEnPesos += cantidadDinero;
                return "Depósito realizado, su nuevo saldo es: " + this.clientes[i].saldoEnPesos 
            }
        }

        return "El cliente no existe"

    },

    extraccion: function (titular, cantidadDinero) {

        for (let i = 0; i < this.clientes.length; i++) {
            
            if (titular === this.clientes[i].titularCuenta) {
                
                if (this.clientes[i].saldoEnPesos > cantidadDinero) {
                    this.clientes[i].saldoEnPesos -= cantidadDinero;
                    return "Extracción realizada correctamente, su nuevo saldo es: " + this.clientes[i].saldoEnPesos
                } else {
                    return "Fondos insuficientes"
                }

            }

        }

    }

};

let clienteEncontrado = banco.consultarCliente("Abigael Natte")
console.log( clienteEncontrado );

let clienteADepositar = banco.deposito( "Ansel Ardley", 20000 )
console.log( clienteADepositar );

let clienteAExtraer = banco.extraccion( "Jacki Shurmer", 5000 )
console.log( clienteAExtraer );

// Bonus Extra:

const personas = [ 
    { 
        nombre: "Lean", 
        edad: 27 
    }, 
    { 
        nombre: "Eze", 
        edad: 49
    } 
];

function propiedadUnica ( array, texto ) {
    
    for (let i = 0; i < array.length; i++) {
        
        for (let j in array[i]) {
            if (texto != j){
                delete array[i][j];
            }
        } 

    }

    return array;

}

console.log(propiedadUnica(personas, "edad"))
console.log(propiedadUnica(arrayCuentas, "saldoEnPesos"))