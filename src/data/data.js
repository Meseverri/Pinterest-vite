import { createApi } from "unsplash-js";
import { card } from "/src/components/card/card";

export const unsplash$ = createApi({
  accessKey: "NU48erynbQuPZPVVaDGAuucw6xEOcALOa2xmc6wOUSo",
});

export const getQuery = (search$) => {
  // const search$ = "tree";
  const page$ = 1;
  let fotosLinks = [];

  unsplash$.search
    .getPhotos({
      query: search$,
      page: page$,
      perPage: 10,
    })
    .then((res) => {
      // res.response.results;
      const section$$ = document.createElement("section");
      
      res.response.results.forEach((elem) => {

        section$$.innerHTML += card(elem.urls.regular, elem.description);
      });
      const app$$=document.querySelector("#app");
      app$$.appendChild(section$$);
    })
    
    ;
};
