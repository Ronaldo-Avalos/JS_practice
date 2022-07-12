//OBJECT CONSTRUCTOR

// OBJECT LITERAL
const producto = {
    nombre: 'MacBook pro',
  	precio: 600,
  	disponible: true,
  
}
//OBJECT CONSTRUCTOR
function Producto(nombre,precio){
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}
const producto2 = new Producto('Iphone 11',8000);
console.log(producto2);