import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <nav>
            <ul>
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contacts</a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I am Andreea</h1>
              <h3>I am an Informatics student. Find me on:</h3>
              <ul className="social-media">
                <li>LinkedIn</li>
                <li>GitHub</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
