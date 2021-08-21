import React from "react";
import axios from "axios";
import "./style.css";

//Link to api: https://rapidapi.com/apidojo/api/tasty/

const api_key = process.env.REACT_APP_API_KEY;

const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/auto-complete",
  params: { prefix: "chicken soup" },
  headers: {
    "x-rapidapi-host": "tasty.p.rapidapi.com",
    "x-rapidapi-key": "c7b162c1f5msh3cbbb4aa95722edp12154fjsna6df2f8cb4ab",
  },
};

const Recipie = (props) => {
  return (
    <div>
      <button onClick={fetchData} className="fetch-button">
        Hello testing
      </button>
    </div>
  );
};

const fetchData = () => {
  console.log("fetching data bip boup...");

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default Recipie;
