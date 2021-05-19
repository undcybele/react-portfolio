import React, { Component } from "react";
import "./About.css";
class About extends Component {
  render() {
    return (
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I am Andreea</h1>
          <h3>I am an Informatics student. Find me on:</h3>
          <hr />
          <ul className="social-media">
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default About;
