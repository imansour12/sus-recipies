import React from "react";

let styles = {
  // Styles for the top navigation
  topnav: {
    backgroundColor: "#fff",
    position: "fixed",
    top: 0,
    overflow: "hidden",
    width: "100%",
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
    </div>
  );
}

export default App;
