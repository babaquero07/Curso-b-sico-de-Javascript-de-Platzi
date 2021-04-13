if (true) {
    console.log("Hola");
} else {
    console.log("Soy falso");
}

var edad = 18;

if (edad === 18) {
    console.log("Puedes votar! Sera tu primera votación.");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo.");
} else {
    console.log("Aun no puedes votar.");
}

// Operador ternario

condition ? true: false;

var numero = 1;

var resultado = numero === 1 ? "Si soy un uno": "No soy uno";