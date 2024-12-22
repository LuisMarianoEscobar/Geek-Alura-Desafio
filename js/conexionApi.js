

async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = await conexion.json(); 
    return conexionConvertida;
}


async function enviarProducto(image,title,price) {
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ 
            image: image,
            title: title,
            price: price,
        })
    })
    const conexionConvertida = await  conexion.json(); 
    return conexionConvertida;
}

async function buscarProducto(palabraClave) {
    
    const conexion= await fetch(`http://localhost:3001/productos?q=${palabraClave}`);
    const conexionConvertida =  await conexion.json();
    return conexionConvertida;
}




export const conexionApi = {
    listarProductos,
    enviarProducto,
    buscarProducto,
    
};