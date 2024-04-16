import "./notFound.css"

export const notFound=(input="")=>{
    return `<div class="notFound">
    <h2>No se encontraron resultados para: "${input}"</h2>
    <p>Prueba haciendo otra busqueda</p>
  </div>`
}