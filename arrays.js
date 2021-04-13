var miArreglo = ["Manzana", "Banano", "Durazno", "Pera"];

console.log(miArreglo);

console.log(miArreglo.lenght); // Longitud arreglo

// Metodos para mutar el contenido del arreglo

var nuevaLongitud = miArreglo.unshift("Uvas"); // Agrega un elemento al INICIO del arreglo

var masFrutas = miArreglo.push("Uvas"); // Agrega un elemento al FINAL del arreglo

var borrarFruta = miArreglo.shift("Uvas"); // Elimina el PRIMER elemento del arreglo

var ultimo = miArreglo.pop("Uvas"); // Elimina el ULTIMO elemento del arreglo

var posicion = miArreglo.indexOf("Durazno"); // Devuelve la posicion del elemento