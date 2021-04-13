// Nos permite validar casos

var numero = 1;

switch (numero) { 
    case 1:
        console.log("Soy uno");
        break;
    case 10:
        console.log("Soy un 10");
        break;
    case 100:
        console.log("Soy un 100");
        break;
    default:
        console.log("No soy nada");
}

// reto papel y tijera

var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function juego (user, cpu) {
    if (user != cpu) {
        switch (true) {
            case (user === op1 && cpu === op3):
                console.log("El usuario ganó con " + op1);
                break;
            case (user === op2 && cpu === op1):
                console.log("El usuario ganó con " + op2);
                break;
            case (user === op3 && cpu === op2):
                console.log("El usuario ganó con " + op3);
                break;
            default:
                console.log("La cpu ganó!")   
        }
    }
    else {
        console.log("Empate!");
    }
}

resultado(op1, op3)