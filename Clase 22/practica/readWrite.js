const fs = require("fs");

/* 1. Obtener el listado de posibles participantes. Tomando como base el siguiente archivo JSON: */
const jsonHelper = {
  
  leerJson: function (nombreArchivo) {

    return JSON.parse(fs.readFileSync(__dirname + "/" + nombreArchivo + ".json", "UTF-8"));
  // Clase22/autos.json
  },

  escribirJson: function (nombreArchivo, datos) {

    return fs.writeFileSync(__dirname + "/" + nombreArchivo + ".json", JSON.stringify(datos, null, 2));

  },

};

module.exports = jsonHelper;