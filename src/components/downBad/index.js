import React from "react";
import downBadPicture from "../../assets/downBad.jpg";
import "./index.css";

const DownBad = () => {
  return (
    <div className="topDownBad">
      <img className="down-bad" src={downBadPicture} alt="downBad" />
    </div>
  );
};

export default DownBad;
