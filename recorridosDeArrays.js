var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700}
];

// Metodo filter.  Nos permite filtrar solo los elementos que deseamos (según ciertos criterios) y devolverlos en un nuevo array.

var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo  <= 500;
});

articulosFiltrados

// Metodo map. Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

var nombreArticulos = articulos.map(function(articulo) {
    return articulo.nombre;
});

nombreArticulos

// Metodo find. Devuelve el PRIMER elemento del array que cumpla con la condición dada

var encuentraArticulo = articulos.find(function(articulo) {
    return articulo.nombre === "Laptop";
});

encuentraArticulo

// Metodo for each. Ejecuta lo que le definamos una vez por cada elemento de nuestro array.

articulos.forEach(function(articulo) {
    console.log(articulo.nombre);
});

// Metodo some. Comprueba si al menos un elemento del array cumple con la condición que le damos.

var articulosBaratos = articulos.some(function(articulo) {
    return articulo.costo <= 700;
});

articulosBaratos