

import { conexionApi } from "./conexionApi.js";

const lista = document.querySelector("[data-lista]");

export default function crearCard(image, title, price) {
  const producto = document.createElement("li");
  producto.className = "card";

  producto.innerHTML=` 

 
    <img class="card__imagen" src="${image}" alt="Imagen">
    <h3 class="card__titulo">${title}</h3>
    <h2 class="card__precio">${price}</h2>
  `
  return producto;
}

async function listarProductos() {
  const listApi = await conexionApi.listarProductos();

  listApi.forEach(producto => {
    lista.appendChild(crearCard(producto.image, producto.title, producto.price));
  });
}

listarProductos();