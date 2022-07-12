// como unir dos objetos

const producto = {
    nombre: 'MacBook pro',
  	precio: 600,
  	disponible: true,
}
console.log( producto)
const medidas = {
   peso: '1kg',
   medida: '1m'
}
console.log(medidas)

const resultado = Object.assign(producto, medidas);
console.log("🚀 ~ file: 05-app.js ~ line 16 ~ resultado", resultado)

// Spread operator o Rest Operator Copea los dos objetos y los une en otro objeto llamado resultado2
console.log("🚀 ~ file: 05-app.js ~ line 19 ~ resultado2", resultado2)
const resultado2 = {...producto, ...medidas}; 