import React from "react";
import Footer from "./components/footer/index";
import Header from "./components/header/index";
import DownBad from "./pages/downBad/index";

function App() {
  return (
    <>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
