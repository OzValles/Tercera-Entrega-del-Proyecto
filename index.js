
//crear productos con constructor

class Producto {
    constructor (id,nombre,precio,img){
        this.id= id;
        this.nombre=nombre;
        this.precio=precio;
        this.img=img;
        this.cantidad= 1;
    }
}

const dino= new Producto(1,"DinoClip",200,"img/imgdino.png");
const combi= new Producto(2,"Combi PortaLapiz",300,"img/imgcombi.png");
const cortador = new Producto(3,"Cortador Pacman",300,"img/imgcortador.png");
const audifonos = new Producto(4,"Porta Audifonos",400, "img/imgaudifonos.png");
const porta = new Producto(5,"Porta Lapiz",500,"img/imgporta.png");
const vasos= new Producto(6,"Porta Vasos",300,"img/imgvasos.jpg");
const salero = new Producto(7,"Salero",400,"img/imgsalero.jpg");
const alexa= new Producto(8,"Soporte Alexa",600,"img/imgalexa.jpg");

//almacenando en un array de productos

const productos = [dino,combi,cortador,audifonos,porta,vasos,salero,alexa]

// array carrito para almacenarlo

let carrito =[];
/* Para cargar carrito en el LocalStorage */

if(localStorage.getItem("carrito")){
carrito= JSON.parse(localStorage.getItem("carrito"))
}

//DOM

const contenedorProductos=document.getElementById("contenedorProductos");
const mostrarProductos = () => {
    productos.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6","col-xs-12");
        card.innerHTML = `
            <div class ="card"> 
                <img src="${producto.img}" class ="card-img-top imgProductos" alt="${producto.nombre}" 
                <div class="card-body">
                <h5 class="card-title"> ${producto.nombre}</h5>
                <p class="card-text">${producto.precio}</p>
                
                <button class="btn colorBoton" id="boton ${producto.id}"> Agregar al Carrito </button>
                </div>
            </div>
        `
        contenedorProductos.appendChild(card);

        // agregando productos al carrito

        const boton =document.getElementById(`boton ${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id)
        })
    })
    }
 //para que se ejecute cuando se carga la pagina
 mostrarProductos();


//para agregar al carrito
const agregarAlCarrito = (id) =>{
    const producto = productos.find((producto) => producto.id === id);
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    } else{
        carrito.push(producto);
        //Local Storage
        localStorage.setItem("carrito",JSON.stringify(carrito))
    }
    calcularTotal();
}
   
    //para ver el carrito

    const contenedorCarrito = document.getElementById("contenedorCarrito");
    const verCarrito = document.getElementById("verCarrito");

    verCarrito.addEventListener("click", () => {
        mostrarCarrito();
    });

    const mostrarCarrito = () => {
        contenedorCarrito.innerHTML =" "; //limpiar el carrito
        carrito.forEach((producto) =>{
            const card = document.createElement("div");
            card.classList.add("col-xl-3", "col-md-6","col-xs-12");
            card.innerHTML = `
                <div class ="card"> 
                    <img src="${producto.img}" class ="card-img-top imgProductos" alt="${producto.nombre}" 
                    <div class="card-body">
                    <h5 class="card-title"> ${producto.nombre}</h5>
                    <p class="card-text">${producto.precio}</p>
                    <p class="card-text">${producto.cantidad}</p>
                    <button class="btn colorBoton" id="eliminar${producto.id}"> Eliminar Producto </button>
                    </div>
                </div>
            `
            
            contenedorCarrito.appendChild(card);

            //eliminar productos del carrito
            const boton = document.getElementById(`eliminar${producto.id}`);
            boton.addEventListener("click", () => {
                eliminarDelCarrito(producto.id)
            })
        })
        calcularTotal();
    }

    // para eliminar del carrito
    const eliminarDelCarrito = (id) => {
        const producto = carrito.find ((producto) => producto.id === id);
        const indice =carrito.indexOf(producto);
        carrito.splice(indice,1);
        mostrarCarrito();

        localStorage.setItem("carrito",JSON.stringify(carrito));
    }

    //boton vaciar carrito
    const vaciarCarrito = document.getElementById("vaciarCarrito");

    vaciarCarrito.addEventListener("click",() =>{
        eliminarTodo();
    })

    const eliminarTodo = () => {
        carrito =[];
        mostrarCarrito();

        localStorage.clear();
    }

    //total de compra

    const total = document.getElementById("total");

    const calcularTotal = () => {
        let totalCompra = 0;
        carrito.forEach((producto) =>  {
            totalCompra += producto.precio * producto.cantidad;
        })
        total.innerHTML= ` de $${totalCompra}`;
    } 

