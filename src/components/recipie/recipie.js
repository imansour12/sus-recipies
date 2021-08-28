import React from "react";

const RecipieComponent = (props) => {
  return (
    <div>
      <p>This is the id: {props.id}</p>
      <p>This is the title: {props.title}</p>
      <p>This is the image: {props.image}</p>
      <p>These are the ingredients: {props.ingredients}</p>
      <p>The instructions now {props.instructions}</p>
      <p>This is the url {props.url}</p>
    </div>
  );
};

export default RecipieComponent;
