import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Resume />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
