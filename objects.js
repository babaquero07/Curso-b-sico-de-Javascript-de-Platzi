var miAuto = {
    marca: "Toyota",
    modelo: "Prado",
    annio: 2020,
    
    detallesDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.año}`);
    }
}

miAuto.marca // Acceder a las propiedades del objeto

miAuto.detallesDelAuto();

// Funcion constructora

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Nissan", "GTR", 2020);
autoNuevo

var autoNuevo2 = new auto("Ford", "Raptor", 2021);
autoNuevo2

var autoNuevo3 = new auto("Toyota", "Corolla", 2020);
autoNuevo3

// RETO CLASE 18/22

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autos = [];

for (var i = 0; i < 30; i++) {
    var marcaAuto = prompt("Digite la marca del auto: ");
    var modeloAuto = prompt("Digite el modelo del auto: ");
    var annioAuto = prompt("Digite el annio del auto: ");

    autos.push(new auto (marcaAuto, modeloAuto, annioAuto));
}

for (var i = 0; i < autos.length; i++ ) {
    console.log(autos[i]);
}