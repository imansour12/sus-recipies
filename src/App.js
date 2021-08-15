import React from "react";
import logo from "./assets/susPicture.png";

let styles = {
  // Styles for the top navigation
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
  },
};
function App() {
  return (
    <div>
      <div style={styles.topnav}>
        <a className="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
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
