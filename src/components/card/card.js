import "./card.css"
export const card=(src,description)=>{
    return `<a class="card">
    <img src="${src}" alt="${description}">
    </a>`
}
// <div class="content">
// <a href="#" class="link">Ver más</a>
// <button class="like-btn"><i class="fas fa-heart"></i> Me gusta</button>
// </div>