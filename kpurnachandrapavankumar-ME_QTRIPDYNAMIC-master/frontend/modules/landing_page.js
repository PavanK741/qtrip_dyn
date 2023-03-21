import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  //Updates the DOM with the cities
  if (cities) {
    cities.forEach((key) => {
      addCityToDOM(key.id, key.city, key.description, key.image);
    });
  }
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try {
    let response = await fetch(config.backendEndpoint + "/cities");
    let data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    // console.log(e);
    return null;
  }
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let dataDiv = document.getElementById("data");
  let divElement = document.createElement("div");
  divElement.className = "col-sm-6 col-md-3 mb-4";
  divElement.innerHTML = 
  ` <a href="pages/adventures/?city=${id}" id="${id}"
    <div class="tile">
     <img src="${image}" class="tile-img" alt="${id}"/>
      <div class="tile-text text-center">
       <h6>${city}</h6>
        <p>${description}</p>
      </div>
    </div>
    </a> 
  `;
  dataDiv.appendChild(divElement);
}

export { init, fetchCities, addCityToDOM };
