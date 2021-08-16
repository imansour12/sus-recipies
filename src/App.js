import React from "react";
import logo from "./assets/susPicture.png";

let styles = {
  // Styles for the top navigation
  // TODO: update styles to make it more responsive: https://www.w3schools.com/css/css_rwd_images.asp using min-device-width
  topnav: {
    backgroundColor: "#fff",
    width: "100%",
    margin: 0,
    padding: 0,
    position: "fixed",
    top: 0,
    left: 0,
    boxShadow: "0 2px 2px 0 rgba(0,0,0,0.1)",
    borderTop: "1px solid #ddd",
    borderRadius: "0.2em",
    paddingTop: "1em",
    height: "9.6%",
    textAlign: "center",
  },
  footer: {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    color: "white",
    textAlign: "center",
  },
  footerText: {
    fontSize: "1.5vw",
    color: "black",
    fontFamily: "Roboto",
  },
  topnavLogo: {
    overflow: "auto",
    height: "100%",
    display: "inline-block",
    float: "left",
    margin: 0,
    padding: 0,
    paddingLeft: "4vw",
    transition: 0.2 /* Animation */,
  },
  headerText: {
    fontSize: "1.5vw",
    float: "left",
    marginLeft: "1.7em",
    fontSize: "1.5vw",
    fontFamily: "Roboto",

    letterSpacing: "2px",
  },
  topnavElements: {
    color: "#2ACC3A",
    textDecoration: "none",
    fontFamily: "Roboto",
    marginLeft: "1.7em",
    letterSpacing: "2px",
    paddingTop: "5px",
    fontSize: "20px",
    fontWeight: "bold",
  },
};
function App() {
  return (
    <div>
      <div style={styles.topnav}>
        <img style={styles.topnavLogo} src={logo} alt="AMOGUS"></img>
        <p style={styles.headerText}>
          The only place for allll of your sus recipies
        </p>
        <a href="#news" style={styles.topnavElements}>
          Recipies
        </a>
        <a href="#contact" style={styles.topnavElements}>
          Food Pisc
        </a>
        <a href="#about" style={styles.topnavElements}>
          Feet Pics
        </a>
      </div>

      <div>
        <p>Hello</p>
      </div>

      <div style={styles.footer}>
        <p style={styles.footerText}>
          nightmare nightmare nightmare nightmare nightmare nightmare nightmare
          nightmare nightmare nightmare nightmare nightmare nightmare nightmare
        </p>
      </div>
    </div>
  );
}

export default App;
