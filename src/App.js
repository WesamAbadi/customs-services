import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
