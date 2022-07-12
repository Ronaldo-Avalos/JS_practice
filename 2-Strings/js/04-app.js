const producto = '        Laptop de 13   ';
const precio = "16 mil";

// ELIMINA LOS ESPACIOS EN BLANCO DEL PRINCIPIO DE LA CADENA
console.log(producto.trimStart());
// ELIMINA LOS ESPACIOS EN BLANCO DEL ULTIMO DE LA CADENA
console.log(producto.trimEnd());

console.log(producto.trimStart().trimEnd());