import React from "react";
import meme from "../../assets/downBad.jpg";
import Header from "../../components/header/index";

const DownBad = () => {
  return (
    <div>
      <Header />
      <img src={meme} alt="Down Bad" />
    </div>
  );
};

export default DownBad;
