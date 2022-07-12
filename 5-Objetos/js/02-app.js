
// Objetos dentro de otro objeto
const producto = {
    nombre: 'MacBook pro',
  	precio: 16000,
  	disponible: true,
 	 	information: {
  			peso: '1kg',
      	colores: {
          color1: 'Gris espacial',
          color2: 'Oro rosa',
          color3: 'Gris Opscuro',          
        }, 
      	pulgadas: '13"',
		},
}

const {information: {colores:{color1}}} = producto;

// console.log(producto.information.colores.color1);
console.log(color1);

