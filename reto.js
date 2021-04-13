// Hacer juego de piedra papel o tijera

var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function (user, cpu) {
    if (user != cpu) {
        if (user === op1 && cpu === op3) {
            console.log("El usuario ganó con " + op1);
        }
        else if (user === op2 && cpu === op1) {
            console.log("El usuario ganó con " + op2);
        }``
        else if (user === op3 && cpu === op2) {
            console.log("El usuario ganó con " + op3);
        }
        else if (user === cpu){
            console.log("Empate");
        }
        else {
            console.log("La cpu ganó");
        }
    }
}

resultado(op1,op3)