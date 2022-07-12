const producto = {
    nombre: 'MacBook pro',
  	precio: 600,
  	disponible: true,
}
// con seal si se puede modijicar las propiedades que si existen
Object.seal(producto);
 
console.log(Object.isFrozen(producto));

  