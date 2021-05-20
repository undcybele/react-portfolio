import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Resume/Resume";

import cvData from "./cvData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header cvData={cvData} />
        <About cvData={cvData} />
        <Resume cvData={cvData} />
        <Footer cvData={cvData} />
      </div>
    );
  }
}

export default App;
