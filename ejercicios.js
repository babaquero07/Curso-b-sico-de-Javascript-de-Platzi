// Pide la edad y si es mayor de 18 años indica que ya puede conducir.

var edad = prompt("Digite su edad: ");

if (edad > 18) {
    console.log("Ya puede conducir!");
}
else {
    console.log("Aun no puede conducir.");
}

// Pide una nota (número). Muestra la calificación según la nota:

// 0-3: Muy deficiente
// 3-5: Insuficiente
// 5-6: Suficiente
// 6-7: Bien
// 7-9: Notable
// 9-10: Sobresaliente

var nota = prompt("Digite la nota: ");

switch (true) {
    case (nota <= 3):
        console.log("Muy deficiente");
        break;
    case (nota > 3 && nota <= 5):
        console.log("Insuficiente");
        break;
    case (nota > 5 && nota <= 6):
        console.log("Suficiente");
        break;
    case (nota > 6 && nota <= 7):
        console.log("Bien");
        break;
    case (nota > 7 && nota <= 9):
        console.log("Notable");
        break;
    case (nota > 9 && nota <= 10):
        console.log("Sobresaliente");
        break;
    default:
        console.log("Imposible!");
}
