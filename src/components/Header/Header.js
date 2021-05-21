import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="home">
        <header>
          <ul className="nav_links">
            <li className="current">
              <a href="#about">Home</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
