let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
];

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

