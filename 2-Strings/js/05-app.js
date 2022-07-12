const producto = 'Laptop de 13';

// REMPLAZAR UNA PALABRA 
console.log(producto.replace('laptop','Macbook'));

// .Slice para cortar
console.log(producto.slice(0,10));
console.log(producto.slice(2,1));

// Alternative a slice is subsstring
console.log(producto.substring(2,1))

// Cortar el primer caracter 
const nombre = " Ronaldo "
console.log(nombre.trim().substring(0,1));
console.log(nombre.trimStart().charAt());
