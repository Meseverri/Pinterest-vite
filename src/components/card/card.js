import "./card.css"
export const card=(src,description)=>{
    return `<div class="card">
    <img src="${src}" alt="${description}">
    </div>`
}
// <div class="content">
// <a href="#" class="link">Ver más</a>
// <button class="like-btn"><i class="fas fa-heart"></i> Me gusta</button>
// </div>