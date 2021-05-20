import React, { Component } from "react";
import "./About.css";
class About extends Component {
  render() {
    let cvData = this.props.cvData;
    return (
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">Hi! I'm Andreea</h1>
          <h3>I am an Informatics student. Find me on:</h3>
          <ul className="social-media">
            {cvData.socialmedia &&
              cvData.socialmedia.map((item) => {
                return (
                  <li>
                    <a href={item.url}>{item.name}</a>
                  </li>
                );
              })}
          </ul>
          <hr />
        </div>
      </div>
    );
  }
}
export default About;