const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tre partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Camilo Mórtigo";
const tema = "el tema que te tocó";

const departamentos = [
  {
    id: 1,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 2395.8
  },
  {
    id: 2,
    propietarios: "Dueños: Luis Perez y María Martinez",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 1597.2
  },
  {
    id: 3,
    propietarios: "Dueña: Laura García",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 4,
    precioAlquiler: 3993
  },
  {
    id: 4,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 1996.5
  },
  {
    id: 5,
    propietarios: "Dueños: Julieta Tols y Pablo Groming",
    cantidadHabitacion: 1,
    disponible: false,
    aceptaMascotas: false,
    cantidadPersonas: 1,
    precioAlquiler: 11979
  },
  {
    id: 6,
    propietarios: "Dueño: Pablo Groming",
    cantidadHabitacion: 2,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 4658.5
  },
  {
    id: 7,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 3,
    precioAlquiler: 3327.5
  },
  {
    id: 8,
    propietarios: "Dueña: Julieta Tols",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 9,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 10,
    propietarios: "Dueñas: Julieta Tols y Laura García",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 11,
    propietarios: "Dueño: Luis Perez",
    cantidadHabitacion: 3,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 12,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 3,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 4,
    precioAlquiler: 7986
  },
  {
    id: 13,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 2,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 4059.55
  },
  {
    id: 14,
    propietarios: "Dueño: Juan Pablo Martinez",
    cantidadHabitacion: 1,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 2,
    precioAlquiler: 3993
  },
  {
    id: 15,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6
  },
  {
    id: 16,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: false,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 798.6
  },
  {
    id: 17,
    propietarios: "Dueños: Martín Gutierrez y José Torres",
    cantidadHabitacion: 0,
    disponible: true,
    aceptaMascotas: true,
    cantidadPersonas: 1,
    precioAlquiler: 665.5
  }
]


/*******************************/
/* Desarrollo de las consignas */
/*******************************/

let inmobiliaria = {
    
    // A
    departamentos: departamentos,
    
    // B
    listarDepartamentos: function( arrayDepartamentos ) {
           
        for (let i = 0; i < arrayDepartamentos.length; i++) {

            let apto = arrayDepartamentos[i];
            let disponibilidad;
            let mascotas;

            apto.disponible == true ? disponibilidad = "está disponible" : disponibilidad = "no está disponible";
            
            apto.aceptaMascotas == true ? mascotas = "acepta mascotas" : mascotas = "no acepta mascotas";

           console.log("id: " + apto.id + ", precio $ " + apto.precioAlquiler + ". " + disponibilidad + ", " + apto.cantidadHabitacion + ", máximo " + apto.cantidadPersonas + ", " + mascotas + ", propietarios: " + apto.propietarios);

        }

    },

    // C
    departamentosDisponibles: function( arrayDepartamentos ) {

        let disponibles = []
        for (let i = 0; i < arrayDepartamentos.length; i++) { 
            
            if (arrayDepartamentos[i].disponible == true) {
                disponibles.push(arrayDepartamentos[i]);
            }

        }

        return disponibles

    },

    // D
    buscarPorId: function( arrayDepartamentos, id ) {
        
        for (let i = 0; i < arrayDepartamentos.length; i++) {           
            if (arrayDepartamentos[i].id == id) {
                return arrayDepartamentos[i];
            }
        }
    },

    // E
    buscarPorPrecio: function( precio ) {
        
        let disponibles = this.departamentosDisponibles( this.departamentos );
        let precioSeAjusta = []

        for (let i = 0; i < disponibles.length; i++) {
            
            if (disponibles[i].precioAlquiler <= precio) {
                precioSeAjusta.push( disponibles[i] );
            }

        }

        return precioSeAjusta;

    },

    //F
    precioConImpuesto: function( porcentaje ) {

        for (let i = 0; i < this.departamentos.length; i++) { 
            this.departamentos[i].precioAlquiler += this.departamentos[i].precioAlquiler * (porcentaje / 100)
        }

        return this.departamentos;

    },

    // G
    simplificarPropietarios: function() {

      for (let i = 0; i < this.departamentos.length; i++) {
          let losPropietarios = this.departamentos[i].propietarios
          let desde = losPropietarios.indexOf(':') 
          let soloPropietarios = losPropietarios.slice(desde)
          this.departamentos[i].propietarios = "Prop." + soloPropietarios
      }
    
    return this.departamentos;    

    },

    //H
    alquilar: function( idRecibido ) {

      for (let i = 0; i < this.departamentos.length; i++) {
        
        if (this.departamentos[i].id == idRecibido) {
          
          if (this.departamentos[i].disponible) {
            this.departamentos[i].disponible = false;
            return "departamento con id: {{" + idRecibido + "}} está alquilado";
          } else {
            return "departamento ya está alquilado"
          }

        }

      }

    },

    //I
    filtrarPetFriendly: function() {

      let arrayPetFriendly = [];

      for (let i = 0; i < this.departamentos.length; i++) {
        
        if (this.departamentos[i].aceptaMascotas) {
          arrayPetFriendly.push(this.departamentos[i]);
        }

      }

      return arrayPetFriendly;

    },

    //J
    rebajasPorNoAlquiler: function() {

      let deptosDisponibles = []
      
      for (let i = 0; i < this.departamentos.length; i++) {
        
        if (this.departamentos[i].disponible) {
          this.departamentos[i].precioAlquiler -= this.departamentos[i].precioAlquiler * (10 / 100);
          deptosDisponibles.push( this.departamentos[i] );
        }

      }

      return deptosDisponibles;

    },

    //K
    buscarPorPropietarios: function(nombrePropietario) {

      let deptosPropietario = [];

      for (let i = 0; i < this.departamentos.length; i++) {
        
        if (this.departamentos[i].propietarios.includes(nombrePropietario)) {
          deptosPropietario.push( this.departamentos[i] );
        }

      }

      return deptosPropietario;

    },

}

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarDepartamentos");
// Ejecución aquí
console.log( inmobiliaria.listarDepartamentos(departamentos) )
console.log(o);

console.log(v, oo + "   C. departamentosDisponibles");
// Ejecución aquí
console.log( inmobiliaria.departamentosDisponibles(departamentos) )
console.log(o);

console.log(v, oo + " D. buscarPorId");
// Ejecución aquí
console.log( inmobiliaria.buscarPorId(departamentos, 5) )
console.log(o);

console.log(v, oo + "  E. buscarPorPrecio");
// Ejecución aquí
console.log( inmobiliaria.buscarPorPrecio(3000) )
console.log(o);

console.log(v, oo + " F. precioConImpuesto");
// Ejecución aquí
console.log( inmobiliaria.precioConImpuesto(10) )
console.log(o);

console.log(v, oo + " G. simplificarPropietarios");
// Ejecución aquí
console.log(o);
console.log( inmobiliaria.simplificarPropietarios() );

console.log(v, oo + " H. alquilar");
// Ejecución aquí
console.log(o);
console.log( inmobiliaria.alquilar(17) );

console.log(v, oo + " I. filtrarPetFriendly");
// Ejecución aquí
console.log(o);
console.log( inmobiliaria.filtrarPetFriendly() );

console.log(v, oo + " J. rebajasPorNoAlquiler ");
// Ejecución aquí
console.log(o);
console.log( inmobiliaria.rebajasPorNoAlquiler() );

console.log(v, oo + " K. buscarPorPropietarios ");
// Ejecución aquí
console.log(o);
console.log( inmobiliaria.buscarPorPropietarios("Julieta Tols") );