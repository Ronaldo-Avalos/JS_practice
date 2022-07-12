const producto = {
    nombre: 'MacBook pro',
  	precio: 600,
  	disponible: true,
  
}
// Te devuelve el nombre de las llaves de tu object
console.log(Object.keys(producto));
// Te devuelve el valor de tus propiedades del object
console.log(Object.values(producto));
// Te devuelve el object completo
console.log(Object.entries(producto));