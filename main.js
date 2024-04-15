import "./style.css";
import {getQuery} from "/src/data/data"
import {header} from "/src/views/header/header"
// import nodeFetch from 'node-fetch';


const app$$=document.querySelector("#app")

app$$.innerHTML+=header()

const butonSearch$$=app$$.querySelector(".search>button");
const input$$=app$$.querySelector(".search>input");
butonSearch$$.addEventListener("click",()=>{
    getQuery(input$$.value)
    
})

const divLogo$$=document.querySelector(`.logo`);
divLogo$$.addEventListener('click', ()=>{
    getQuery("Random");

})

