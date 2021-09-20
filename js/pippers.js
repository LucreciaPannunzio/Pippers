let iniciarCompra = true;
const carritoDeCompras = [];
let menu = alert("Listado de productos:\n 1) EMPANADAS \n 2) HAMBURGUESAS \n 3) PASTAS \n 4) MILANESAS \n 5) PIZZAS \n 6) GUISOS \n 7) DIPS");
let seleccionarProducto = prompt("Seleccione un producto de la tienda: ").toUpperCase();
let seleccionarCantidad = parseInt(prompt("Seleccione la cantidad del producto que desea:"));

class Producto {
    constructor(producto) {
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

const tiendaOnline = [ {nombre: "Empanadas", precio:100},
                        {nombre: "Hamburguesas", precio:180},
                        {nombre: "Pastas", precio:300},
                        {nombre: "Milanesas", precio:200},
                        {nombre: "Pizzas", precio:320},
                        {nombre: "Guisos", precio:380},
                        {nombre: "Dips", precio:100}
];

while(iniciarCompra === true) {  
    seleccionarProducto;
    seleccionarCantidad;
    if (seleccionarProducto != "" && seleccionarCantidad != "") {
        let productoElegido = tiendaOnline.find(
            (product) => product.nombre.toLocaleUpperCase() === seleccionarProducto
        );
        let compra = "";
        switch (productoElegido.nombre.toUpperCase()) {
            case "EMPANADAS":
                alert("Producto añadido al carrito. Precio = $" + (100 * seleccionarCantidad));
                compra = new ProductoSeleccionado({
                    nombre: productoElegido.nombre,
                    cantidad: seleccionarCantidad,
                    precioUnidad: productoElegido.precio,
                });
                carritoDeCompras.push(compra);
                seleccionarProducto = "";
                seleccionarCantidad = "";
                break;
            case "HAMBURGUESAS":
                alert("Producto añadido al carrito. Precio = $" + (180 * seleccionarCantidad));
                compra = new ProductoSeleccionado({
                    nombre: productoElegido.nombre,
                    cantidad: seleccionarCantidad,
                    precioUnidad: productoElegido.precio,
                });
                carritoDeCompras.push(compra);
                seleccionarProducto = "";
                seleccionarCantidad = "";
                break;
            case "PASTAS":
                alert("Producto añadido al carrito. Precio = $" + (300 * seleccionarCantidad));
                compra = new ProductoSeleccionado({
                    nombre: productoElegido.nombre,
                    cantidad: seleccionarCantidad,
                    precioUnidad: productoElegido.precio,
                });
                carritoDeCompras.push(compra);
                seleccionarProducto = "";
                seleccionarCantidad = "";
                break;
            case "MILANESAS":
                alert("Producto añadido al carrito. Precio = $" + (200 * seleccionarCantidad));
                compra = new ProductoSeleccionado({
                    nombre: productoElegido.nombre,
                    cantidad: seleccionarCantidad,
                    precioUnidad: productoElegido.precio,
                });
                carritoDeCompras.push(compra);
                seleccionarProducto = "";
                seleccionarCantidad = "";
                break;
            case "PIZZAS":
                alert("Producto añadido al carrito. Precio = $" + (320 * seleccionarCantidad));
                compra = new ProductoSeleccionado({
                    nombre: productoElegido.nombre,
                    cantidad: seleccionarCantidad,
                    precioUnidad: productoElegido.precio,
                });
                carritoDeCompras.push(compra);
                seleccionarProducto = "";
                seleccionarCantidad = "";
                break;
            case "GUISOS":
                alert("Producto añadido al carrito. Precio = $" + (380 * seleccionarCantidad));
                compra = new ProductoSeleccionado({
                    nombre: productoElegido.nombre,
                    cantidad: seleccionarCantidad,
                    precioUnidad: productoElegido.precio,
                });
                carritoDeCompras.push(compra);
                seleccionarProducto = "";
                seleccionarCantidad = "";
                break;
            case "DIPS":
                alert("Producto añadido al carrito. Precio = $" + (100 * seleccionarCantidad));
                compra = new ProductoSeleccionado({
                    nombre: productoElegido.nombre,
                    cantidad: seleccionarCantidad,
                    precioUnidad: productoElegido.precio,
                });
                carritoDeCompras.push(compra);
                seleccionarProducto = "";
                seleccionarCantidad = "";
                break;
            default:
                alert("Producto no disponible. Seleccione un producto de la tienda: ");
                iniciarCompra = true;
                break;
        }

        let otroProducto = prompt("Quiere seleccionar otro producto?").toUpperCase();
        if (otroProducto == "SI") {
            seleccionarProducto = prompt("Seleccione un producto de la tienda: ").toUpperCase();
            seleccionarCantidad = parseInt(prompt("Seleccione la cantidad del producto que desea:"));
            iniciarCompra = true;
        } else {
            iniciarCompra = false;
        }
    } else {
        alert("Por favor, seleccione un producto de la tienda:");
    }
}  

function verCarrito(compras) {
    let totalCarrito = 0;
    for (let i = 0 ; i < compras.length; i++){
        console.log(compras);
        totalCarrito = parseInt(compras[i].precioUnidad) * parseInt(compras[i].cantidad) + totalCarrito;
        console.log(totalCarrito);
    }
    return totalCarrito;
}

let valorFinal = verCarrito(carritoDeCompras);
alert("El monto final de la compra es: $" + valorFinal);
