import React from "react";
import "./index.css";
import logo from "../../assets/susPicture.png";

const Header = () => {
  return (
    <>
      <ul>
        <img className="amogusImage" src={logo} alt="AMOGUS SUSSY BAKA" />
        <p>The only place for allll of your sus recipies</p>
        <li>
          <a href="/">Recipies</a>
        </li>
        <li>
          <a href="#">Food Pics</a>
        </li>
        <li>
          <a href="#">Feet Pics</a>
        </li>
      </ul>
    </>
  );
};
export default Header;
