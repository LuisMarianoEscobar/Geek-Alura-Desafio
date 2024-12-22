const url = "http://localhost:3001/productos "

function listaImagenes(){

    fetch(url)
   .then(response => response.json())
   .then( datosImagenes => { 
    console.log(datosImagenes)
    const card= document.querySelector("[data-ul]")

    datosImagenes.forEach(elemento => {
        const contenido =` <li class="card" ">
        <img class= "card__imagen" src="${elemento.image}" alt= "Imagen">
        <h3 class= "card__titulo">${elemento.title} </h3>
        <h2 class="card__precio"> ${elemento.price}</h2>

        </li>`
        card.innerHTML= card.innerHTML + contenido
    })

   })
   .catch( error => console.log(error) )
}
   listaImagenes()