import "./section.css";
import {getQuery} from "/src/data/data"


export const section = () => {
  const app$$ = document.querySelector("#app");

  const butonSearch$$ = app$$.querySelector(".search>button");
  const input$$ = app$$.querySelector(".search>input");
  let searchValue = "";
  let pageCount = 1;
  let hight = document.body.offsetHeigh;
  butonSearch$$.addEventListener("click", () => {
    searchValue = input$$.value;
    pageCount = 1;
    getQuery(searchValue, pageCount);
  });
  let scrollEnd = false;

  window.onscroll = function () {
    if (hight != document.body.offsetHeight) {
      hight = document.body.offsetHeight;
      scrollEnd = false;
    }
    if (
      !scrollEnd &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    ) {
      // console.log(window.innerHeight + window.scrollY)
      // You've reached the bottom!
      scrollEnd = true;
      // myFunction();
      pageCount += 1;
      getQuery(searchValue, pageCount);
    }
  };

  const divLogo$$ = document.querySelector(`.logo`);
  divLogo$$.addEventListener("click", () => {
    searchValue = "Random";
    getQuery(searchValue, 1);
  });
};
