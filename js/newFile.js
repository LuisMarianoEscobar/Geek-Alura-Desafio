import { formulario, crearProducto } from "./crearProducto";

formulario.addEventListener("submit", evento => crearProducto(evento));
