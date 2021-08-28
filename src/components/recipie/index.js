import React from "react";
import axios from "axios";
import "./style.css";
import RecipieComponent from "./recipie";

//Link to api: https://rapidapi.com/apidojo/api/tasty/

const api_key = process.env.REACT_APP_API_KEY;
const app_id = process.env.REACT_APP_APP_ID;

//let request_link = `api.edamam.com/api/recipes/v2?type=public&q=sus&app_id=${app_id}&app_key=&api_key=${api_key}`;

const request_link = `https://api.edamam.com/api/recipes/v2?type=public&q=sus&app_id=${app_id}&app_key=${api_key}`;

console.info("Logging the api credentials:");
console.info(app_id);
console.info(api_key);

const Recipie = () => {
  return (
    <div>
      <h1>Error, don't abuse the api</h1>
      <button onClick={fetchData}>sldkmfjslkdfjlqskjdf</button>
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
  //fetch data from api
  axios
    .get(request_link)
    .then((res) => {
      console.log("data fetched");
      console.log(res.data.hits);
      let recipie = res.data.hits[0];
      console.log(recipie);
    })
    .catch((err) => {
      console.log("error fetching data");
      console.log(err);
    });
};

export default Recipie;
