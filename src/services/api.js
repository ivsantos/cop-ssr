import fetch from "isomorphic-fetch";

const fetchCats = (tag = "cute") => {
  const encodedURI = encodeURI(
    `https://cataas.com/api/cats?tags=${tag}&skip=0&limit=10`
  );

  return fetch(encodedURI)
    .then((data) => data.json())
    .then((cats) => cats)
    .catch((error) => {
      console.warn(error);
      return null;
    });
};

export { fetchCats };
