import React, { Component } from "react";
import "./Resume.css";
class Resume extends Component {
  render() {
    let cvData = this.props.cvData;
    return (
      <section className="resume">
        <div className="row education">
          <h1>
            <span>Education</span>
          </h1>
          <div className="nine columns main-col">
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
    );
  }
}
export default Resume;
