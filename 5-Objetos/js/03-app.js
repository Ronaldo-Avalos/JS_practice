// Modificamos al objeto para que no se le pueda eliminar las propiedades 
'use strict'; 
const producto = {
    nombre: 'MacBook pro',
  	precio: 600,
  	disponible: true,
}
Object.freeze(producto);
console.log(Object.isFrozen(producto));

  