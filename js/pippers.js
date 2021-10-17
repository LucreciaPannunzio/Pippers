let iniciarCompra = true;
const carritoDeCompras = [];
const nodoCarrito = document.getElementById("carrito");

class Producto {
    constructor(producto) {
        this.id = producto.id;
        this.nombre = producto.nombre;
        this.precio = producto.precio;
    }
}

class ProductoSeleccionado {
    constructor(pedido) {
      this.pedido = pedido.nombre;
      this.cantidad = pedido.cantidad;
      this.precioUnidad = pedido.precioUnidad;
    }
}

const tiendaOnline = [ {id:"1", nombre: "Empanadas", precio:100},
                        {id:"2", nombre: "Hamburguesas", precio:180},
                        {id:"3", nombre: "Pastas", precio:300},
                        {id:"4", nombre: "Milanesas", precio:200},
                        {id:"5", nombre: "Pizzas", precio:320},
                        {id:"6", nombre: "Guisos", precio:380},
                        {id:"7", nombre: "Dips", precio:100},
                        {id:"8", nombre: "Ravioles", precio:400},
];

const renderCarrito = () => {
    let acumulador = "";
    if(carritoDeCompras !== []) {
        carritoDeCompras.forEach( el => { 
            acumulador += `<tr>
                                <th scope="row">${el.id}</th>
                                <td>${el.nombre}</td>
                                <td>${el.precio}</td>
                                <td>${el.cantidad}</td>
                                <td><button onclick="borrarDelCarrito(${el.id})">x</button></td>
                            </tr>`
        });
    }
    nodoCarrito.innerHTML = acumulador;
}

const agregarAlCarrito = (id) => {
    let seleccion = tiendaOnline.find( el => el.id === id);
    let existe = carritoDeCompras.find(el => el.id === id);
    if(!existe) {
        const productoElegido = {
            id: seleccion.id,
            nombre: seleccion.nombre,
            precio: seleccion.precio,
            cantidad: 1
        };
        carritoDeCompras.push(productoElegido);        
    } else {
        let index = tiendaOnline.findIndex(el => el.id === id);
        carritoDeCompras[index].cantidad += 1;
    }
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
}

const borrarDelCarrito = (id) => {
    const aux = carritoDeCompras.filter(el => el.id !== id);
    carritoDeCompras = aux;
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
    renderCarrito();
}

//Eventos
const buttonEmpanadas = document.getElementById("button-empanadas");
const buttonHamburguesas = document.getElementById("button-hamburguesas");
const buttonPastas = document.getElementById("button-pastas");
const buttonMilanesas = document.getElementById("button-milanesas");
const buttonPizzas = document.getElementById("button-pizzas");
const buttonDips = document.getElementById("button-dips");
const buttonGuiso = document.getElementById("button-guiso");
const buttonRavioles = document.getElementById("button-ravioles");
const productoAgregado = document.getElementById("agregarProducto");

const clickButton = () => {
    productoAgregado.innerHTML = "Producto agregado al carrito!";
}

buttonEmpanadas.onclick = () => {
    buttonEmpanadas.style.backgroundColor = "#B5F09D";
    clickButton();
    agregarAlCarrito("1");
    renderCarrito();
    borrarDelCarrito("1");
};
buttonHamburguesas.onclick = () => {
    buttonHamburguesas.style.backgroundColor = "#B5F09D";
    clickButton();
    agregarAlCarrito("2");
    renderCarrito();
    borrarDelCarrito("2");
};
buttonPastas.onclick = () => {
    buttonPastas.style.backgroundColor = "#B5F09D";
    clickButton();
    agregarAlCarrito("3");
    renderCarrito();
    borrarDelCarrito("3");
};
buttonMilanesas.onclick = () => {
    buttonMilanesas.style.backgroundColor = "#B5F09D";
    clickButton();
    agregarAlCarrito("4");
    renderCarrito();
    borrarDelCarrito("4");
};
buttonPizzas.onclick = () => {
    buttonPizzas.style.backgroundColor = "#B5F09D";
    clickButton();
    agregarAlCarrito("5");
    renderCarrito();
    borrarDelCarrito("5");
};

buttonGuiso.onclick = () => {
    buttonGuiso.style.backgroundColor = "#B5F09D";
    clickButton();
    agregarAlCarrito("6");
    renderCarrito();
    borrarDelCarrito("6");
};
buttonDips.onclick = () => {
    buttonDips.style.backgroundColor = "#B5F09D";
    clickButton();
    agregarAlCarrito("7");
    renderCarrito();
    borrarDelCarrito("7");
};
buttonRavioles.onclick = () => {
    buttonRavioles.style.backgroundColor = "#B5F09D";
    clickButton();
    agregarAlCarrito("8");
    renderCarrito();
    borrarDelCarrito("8");
};