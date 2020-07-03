import React from "react";
import "./App.css";
import Search from "./Search";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Search />
      <Weather city="Mexico" />
    </div>
  );
}

export default App;
