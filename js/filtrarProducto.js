import { conexionApi } from "./conexionApi.js";
import crearCard   from "./mostrarProductos.js";



async function filtrarProducto(evento) {
    evento.preventDefault();
    
    

const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
const busqueda=  await conexionApi.buscarProducto(datosDeBusqueda);

const lista =document.querySelector ("[data-ul]");
busqueda.forEach(producto => lista.appendChild(crearCard(producto.image,producto.title,producto.price) 
    
))

//console.log(busqueda)
}
const boton =document.querySelector("[data-boton-busqueda]");
boton.addEventListener("click",evento => filtrarProducto(evento))