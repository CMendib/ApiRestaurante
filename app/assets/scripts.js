const resturantesApi = 'http://localhost:3000';

function callApi (apiUrl) {
  fetch (apiUrl)
    .then (resp => resp.json())
    .then (restaurantes => console.log(restaurantes) );

}

callApi (resturantesApi);
