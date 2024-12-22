import { conexionApi } from "./conexionApi.js";

export const formulario=document.querySelector("[data-formulario]");
  export async function crearProducto(evento){
    evento.preventDefault();
    const title=document.querySelector("[data-titulo]").value;
    const image=document.querySelector("[data-imagen]").value;
    const price=document.querySelector("[data-precio]").value;

    

     await conexionApi.enviarProducto(image,title,price);
     window.location.href="../paginas/cargaDeProductoFinalizada.html";
 }
   formulario.addEventListener("submit",evento => crearProducto(evento));