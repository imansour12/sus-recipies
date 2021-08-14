import React from "react";
import "./index.css";

const NavBar = () => {
  return (
    <div>
      <div className="NavBar">
        <div className="NavBackground">
          <div className="susPicture">
            <img
              src={require("../../assets/susPicture.png")}
              alt="Sussy picture"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
