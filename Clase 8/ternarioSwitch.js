// If ternario

let fruta = "Manzana";

let resultado = fruta == "Manzana" ? "Buenísimo, me gustan las manzanas": "Ufa, quería mazana";
console.log(resultado)

// Switch

let semaforo = "Rojo"

switch (semaforo) {
    case "Verde":
        console.log("Puedo cruzar");
    break
    case "Amarillo":
        console.log("Precaución");
    break
    case "Rojo":
        console.log("No cruces, hay que esperar");
    break
    default:
        console.log("No funciona el semáforo");
}