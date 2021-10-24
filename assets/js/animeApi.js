
const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=00";

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      pikapika(json.results);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

const pikapika = (data) => {
  data.forEach((pp)=>{
    return fetch(pp.url)
    .then((response) => response.json())
    .then((json) => {
      fillData(json);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
  });
  
};

const fillData = (data) => {
  let html = "";
    html += '<div class="col">';
    html += '<div class="card h-100" style="width: 15rem;">';
    html += `<img src="${data.sprites.other.dream_world.front_default}" class="card-img-top" alt="${data.name}">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${data.name}</h5>`;
    html += "</div>";
    html += "</div>";

    document.getElementById("dataCharacters").innerHTML = html;
  };
  
  

// Sejecuta la API

  getData(API);
