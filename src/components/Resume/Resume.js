import React, { Component } from "react";
import "./Resume.css";
class Resume extends Component {
  render() {
    let cvData = this.props.cvData;
    return (
      <div className="resume">
        <a id="resume"></a>
        <div className="title">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <section className="education">
          <div className="element">
            {cvData.education &&
              cvData.education.map((item) => {
                return (
                  <>
                    <h3>{item.institutionName}</h3>
                    <p>{item.specialization}</p>
                    <em>
                      {item.beginDate} - {item.endDate}
                    </em>
                    <hr className="breaker" />
                  </>
                );
              })}
          </div>
        </section>

        <a id="projects"></a>
        <div className="title">
          <h1>
            <span>My projects</span>
          </h1>
        </div>
        <section className="projects">
          <div className="element">
            {cvData.projects &&
              cvData.projects.map((item) => {
                return (
                  <>
                    <h3>{item.name}</h3>
                    <p>{item.institution}</p>
                    <em>
                      {item.beginDate}
                      {item.endDate}
                    </em>
                    <p className="description">{item.description}</p>
                    <hr className="breaker" />
                  </>
                );
              })}
          </div>
        </section>
      </div>
    );
  }
}
export default Resume;
