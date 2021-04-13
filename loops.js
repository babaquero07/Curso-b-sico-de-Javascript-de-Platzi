var estudiantes = ["Alex", "Sergio", "Maria", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

// For

for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

// for of. Recorre los valores de un objeto iterable.

for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}

// while

var profesores = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarProfesores(profesor) {
    console.log(`Hola, ${profesor}`);
}


while(profesores.length > 0) {
    var profesor = profesores.shift();
    saludarProfesores(profesor);
}