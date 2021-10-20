let curso = {
    
    cantidadAlumnos : 32,
    docentes : ["Nacho", "Javier"],
    horario: "de 19 a 21 hs",
    
    notificaciones : function() { return "El horario de la cursada es " + this.horario; }

}

// Muestra el objeto completo.
console.log( curso ); 
// Muestra una propiedad del objeto.
console.log( "La cantidad de alumnos de este curso es de: " + curso.cantidadAlumnos );

console.log( curso.notificaciones() );

// Función constructora
function Curso( cantidadAlumnos, docentes, horario ) {
    
    this.cantidadAlumnos = cantidadAlumnos;
    this.docentes = docentes;
    this.horario = horario;

}

let cursoDeProgramacion = new Curso ( 50, ["Javier", "Gerardo"], "de 19 a 21 hs" );
let cursoDeMarketing = new Curso ( 45, ["Diego", "Debbie"], "de 17 a 19 hs" );

console.log( cursoDeProgramacion )
console.log( cursoDeMarketing )