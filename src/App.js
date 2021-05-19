import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import cvData from "./cvData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="container" cvData={cvData} />
        <About />
        <Resume className="container" cvData={cvData} />
        <Contact className="container" cvData={cvData} />
        <Footer className="container" cvData={cvData} />
      </div>
    );
  }
}

export default App;
