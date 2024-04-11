import "./header.css";
import {bootIcon} from "/src/components/bootIcon/bootIcon"

export const header=()=>{

    return`<header>
<div class="logo">
  <img src="/0a13f3d326a26f754ce06d36c0ca284e.jpg" alt="logo">
</div>
<div class="search">
  <input type="text" placeholder="Buscar">
  <button type="submit">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
    viewBox="0 0 16 16">
    <path
      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
  </svg>
</div>
<div class="login">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person"
  viewBox="0 0 17 17">
  <path
    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664" />
</svg>
</div>

</header>` 



}