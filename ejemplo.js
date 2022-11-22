let totalCompra = 0
const CARRITO = []
const PRODUCTOS = []

class impresion {
constructor(id, tamano, precio, modelo){
    this.id = id;
    this.tamano = tamano;
    this.precio = precio;
    this.modelo = modelo;
    
}
}

const cortador = new impresion(1, "grande", 200, "cortador")
const PortaAudifonos = new impresion(2, "grande", 300, "portaudifonos")
const Dinoclips = new impresion(3, "pequeno", 150, "dinoclip")
const PortaLapiz = new impresion(4, "grande", 400, "portalapiz")

PRODUCTOS.push(cortador)
PRODUCTOS.push(PortaAudifonos)
PRODUCTOS.push(Dinoclips)
PRODUCTOS.push(PortaLapiz)

console.log(PRODUCTOS);

      
seguirComprando = true


    const iniciarCompra = () => {
    while (seguirComprando) {
        let producto = parseInt(prompt('Escoge el producto a comprar: 1.Cortador - 2.PortaAudifonos - 3.DinoClips - 4.PortaLapiz'))
        while (producto !== 1 && producto !== 2 && producto !== 3 && producto !== 4){
            producto = parseInt(prompt('Escoge el producto a comprar: 1.Cortador - 2.PortaAudifonos - 3.DinoClips - 4.PortaLapiz'))
        }
        CARRITO.push(PRODUCTOS[producto - 1])
        let seguir = parseInt(prompt('¿Desea seguir comprando?: 1.SI - 2.NO'))
        while (seguir !== 1 && seguir !== 2){
            seguir = parseInt(prompt('¿Desea seguir comprando?: 1.SI - 2.NO'))
        }
        if (seguir === 2) {
            seguirComprando = false
        }
    }
    console.log(CARRITO);
    
    totalCompra = CARRITO.map(producto => producto.precio).reduce((a, b) => a + b)
    console.log(totalCompra);
    alert(`El total de su compra es de $${totalCompra}`)

    }
    
    iniciarCompra()