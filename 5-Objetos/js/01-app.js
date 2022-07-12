// objetos 
//Creacion de un objeto
const producto = {
    nombre: 'MacBook pro',
  	precio: 600,
  	disponible: true,
}
//Hacceder a los valores de un objeto
// Sintaxis de punto
console.log(producto.nombre);
// otra opcion seria 
console.log(producto['precio']); 
//Agregar mas propiedades al objeto
producto.imagen = 'imagen.png';
console.log(producto);
//Eliminar llave, esto ta,bien me regresa un valor boleano
delete producto.precio;
console.log(producto);
 // Asignar el valor de la propiedad a una variable 
const valor = producto.disponible;
console.log(valor);
// object destructuring  {Crea la variable en baase a la propiedad del objeto en un solo paso}
const { nombre } = producto;
console.log(nombre);
// Objetos dentro de otro objeto





