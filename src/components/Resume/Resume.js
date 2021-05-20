import React, { Component } from "react";
import "./Resume.css";
class Resume extends Component {
  render() {
    let cvData = this.props.cvData;
    return (
      <div className="resume">
        <section className="education">
          <div className="row education">
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
                    </>
                  );
                })}
            </div>
          </div>
        </section>

        <section className="projects">
          <div className="row projects">
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
