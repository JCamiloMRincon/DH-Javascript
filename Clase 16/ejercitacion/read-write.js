let fileSystem = require('fs');

const jsonHelper = {

    leerJSON: function(nombreArchivo) {
    
        let textoJSON = fileSystem.readFileSync(__dirname + nombreArchivo, 'utf-8');
        let texto = JSON.parse(textoJSON);
        return texto;
    
    },
    
    escribirJSON: function(nombreArchivo, datos) {
    
        let datosJSON = JSON.stringify(datos);
        fileSystem.writeFileSync(nombreArchivo, datosJSON);
        return "Se sobreescribió correctamente";
    
    },
    
}

module.exports = jsonHelper

