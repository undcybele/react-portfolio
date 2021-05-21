import React, { Component } from "react";
import "./Footer.css";
class Footer extends Component {
  render() {
    let cvData = this.props.cvData;
    return (
      <footer>
        <p>Find me on social media: </p>
        <div className="row">
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
        </div>
        <p>Created May 2021 by Andreea Bolea</p>
      </footer>
    );
  }
}

export default Footer;
