import { createApi } from "unsplash-js";
import { card } from "/src/components/card/card";

export const unsplash$ = createApi({
  accessKey: "NU48erynbQuPZPVVaDGAuucw6xEOcALOa2xmc6wOUSo",
});

export const getQuery = (search$, page$) => {
  // const search$ = "tree";
  // const page$ = 1;
  let fotosLinks = [];

  unsplash$.search
    .getPhotos({
      query: search$,
      page: page$,
      perPage: 20,
    })
    .then((res) => {
      // res.response.results;
      if (page$ === 1) {
        
        const app$$ = document.querySelector("#app");
        const prevSection$$=app$$.querySelector("section");
        if(prevSection$$!==null){
          prevSection$$.remove();
      }
        const section$$ = document.createElement("section");
        res.response.results.forEach((elem) => {
          // console.log(elem)
          section$$.append(
            card(
              elem.urls.regular,
              elem.description,
              elem.id,
              elem.liked_by_user
            )
          );
        });
        app$$.appendChild(section$$);
      } else {
        const section$$ = document.querySelector("section");
        res.response.results.forEach((elem) => {
          // console.log(elem)
          section$$.append(
            card(
              elem.urls.regular,
              elem.description,
              elem.id,
              elem.liked_by_user
            )
          );

        });
      }
    });
};

export const likeFoto = (id) => {
  // console.log(id)
  unsplash$.photos
    .get({
      photoId: id,
    })
    .then((res) => {
      res.response.liked_by_user = true;
    });
};
