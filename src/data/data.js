import { createApi } from "unsplash-js";
import { card } from "/src/components/card/card";

export const unsplash$ = createApi({
  accessKey: "NU48erynbQuPZPVVaDGAuucw6xEOcALOa2xmc6wOUSo",
});

export const getQuery = () => {
  const search$ = "tree";
  const page$ = 1;
  let fotosLinks = [];

  unsplash$.search
    .getPhotos({
      query: search$,
      page: page$,
      perPage: 5,
    })
    .then((res) => {
      // res.response.results;
      const section$$ = document.querySelector("section");
      
      res.response.results.forEach((elem) => {
        var img = new Image();
  
        img.onload = function () {
          console.log("Ancho: " + this.width + ", Alto: " + this.height);
        };
        img.src=elem.urls.regular
        section$$.innerHTML += card(elem.urls.regular, elem.description);
      });
      console.log(res.response.results[0]);
    })
    ;
};
