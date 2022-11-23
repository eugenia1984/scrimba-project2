import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import './App.css';
import Cards from "./components/card/Cards";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cards />
    </div>
  );
}

export default App;