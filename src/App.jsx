import React from "react";
import "./App.css";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Filter />
    </div>
  );
}

export default App;
