import React, { Component } from "react";
import "./Projects.css";
class Projects extends Component {
  render() {
    let cvData = this.props.cvData;
    return (
      <section className="projects">
        <div className="row education">
          <h1>
            <span>My projects</span>
          </h1>
          <div className="nine columns main-col">
            {cvData.projects &&
              cvData.projects.map((item) => {
                return (
                  <>
                    <h3>{item.name}</h3>
                    <p>{item.institution}</p>
                    <em>
                      {item.beginDate} - {item.endDate}
                    </em>
                    <p>{item.description}</p>
                  </>
                );
              })}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
