import React from "react";
import axios from "axios";
import "./style.css";

//Link to api: https://rapidapi.com/apidojo/api/tasty/

const api_key = process.env.REACT_APP_API_KEY;
const app_id = process.env.REACT_APP_APP_ID;

//let request_link = `api.edamam.com/api/recipes/v2?type=public&q=sus&app_id=${app_id}&app_key=&api_key=${api_key}`;

let request_link = `https://api.edamam.com/api/recipes/v2?type=public&q=sus&app_id=${app_id}&app_key=${api_key}`;

console.info("Logging the api credentials:");
console.info(app_id);
console.info(api_key);

const Recipie = (props) => {
  return (
    <div>
      <button onClick={fetchData} className="fetch-button">
        Hello testing
      </button>
    </div>
  );
};

//Find a way to use state to change this
const Error = () => {
  return (
    <div>
      <h1>Error, don't abuse tha api</h1>
    </div>
  );
};

const fetchData = () => {
  console.log("fetching data bip boup...");

  axios
    .get(request_link)
    .then((response) => {
      let Modifiedresponse = response.data.hits;
      for (let i = 0; i < Modifiedresponse.length; i++) {
        var recipe = {
          title: Modifiedresponse[i].recipe.label,
          image: Modifiedresponse[i].recipe.image,
          ingredients: Modifiedresponse[i].recipe.ingredientLines,
          instructions: Modifiedresponse[i].recipe.instructions,
          url: Modifiedresponse[i].recipe.url,
          id: Modifiedresponse[i].recipe.id,
        };

        console.log(Modifiedresponse);
        console.log("fetching data done");
        console.log(recipe.title);
        console.log(recipe.image);
        console.log(recipe.ingredients);
        console.log(recipe.url);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export default Recipie;
