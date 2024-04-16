import "./style.css";
import {header} from "/src/views/header/header"
import {section} from "/src/views/section/section"
// import nodeFetch from 'node-fetch';


const app$$=document.querySelector("#app")
app$$.innerHTML+=header()
section()

