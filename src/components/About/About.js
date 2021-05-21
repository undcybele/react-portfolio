import React, { Component } from "react";
import "./About.css";
class About extends Component {
  render() {
    let cvData = this.props.cvData;
    return (
      <>
        <a id="about"></a>
        <div className="banner">
          <div className="banner-text">
            <h1>Hi! I'm {cvData.firstname}</h1>
            <h3>{cvData.description} Find me on:</h3>
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
            <ul className="skills" alt="skills list">
              {cvData.skills &&
                cvData.skills.map((skill) => {
                  return (
                    <li>
                      <a>{skill}</a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default About;
