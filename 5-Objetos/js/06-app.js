// this en los objetos

const producto = {
    nombre: 'MacBook pro',
  	precio: 600,
  	disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`)
    }
}
producto.mostrarInfo();