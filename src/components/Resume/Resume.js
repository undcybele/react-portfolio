import React, { Component } from "react";
import "./Resume.css";
class Resume extends Component {
  render() {
    let cvData = this.props.cvData;
    return (
      <div className="resume">
        <a id="resume"></a>
        <section className="education">
          <div className="title">
            <h1>
              <span>Education</span>
            </h1>
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
          </div>
        </section>

        <a id="projects"></a>
        <section className="projects">
          <div className="title">
            <h1>
              <span>My projects</span>
            </h1>
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
                      <p>{item.description}</p>
                      <hr className="breaker" />
                    </>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Resume;
