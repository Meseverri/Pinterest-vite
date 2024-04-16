import "./card.css"
import { bootIcon } from "../bootIcon/bootIcon"
import { likeFoto } from "../../data/data";
export const card=(src,description,id,liked_by_user)=>{
    const noFill=bootIcon("bi bi-heart","m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15");
    const fill=bootIcon("bi bi-suit-heart-fill","M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1");
    

    const divCard$$=document.createElement("a");
    divCard$$.classList.add("card")
    divCard$$.id=id

    divCard$$.innerHTML=`
    <img src="${src}" alt="${description}">
        <div class="card_info_hover">
            ${liked_by_user ? fill: noFill}
        </div>`;
    // console.log(divCard$$)

    const card_info_hover$$=divCard$$.querySelector(".card_info_hover");
    card_info_hover$$.addEventListener( 'click', () =>{
        if(card_info_hover$$.querySelector("svg").classList.value.includes("fill")){
            card_info_hover$$.innerHTML=noFill;
            likeFoto(id)
        }else{
            card_info_hover$$.innerHTML=fill
            likeFoto(id)
        };
    })
    return divCard$$;
}
