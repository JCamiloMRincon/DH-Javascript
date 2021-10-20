const PI = Math.PI;

let operaciones = {
    
    area: function (radio) {
        return PI * radio ** 2;
    },
    
    perimetro: function (radio) {
        return 2 * PI * radio;
    },

}

let otro = {

    saludar: function() {
        return "Hola!"
    },
    
}

module.exports = {operaciones, otro};