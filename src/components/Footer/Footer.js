import React, { Component } from "react";
import "./Footer.css";
class Footer extends Component {
  render() {
    let cvData = this.props.cvData;
    return (
      <footer>
        <p>Find me on social media or: </p>
        <div className="row">
          <ul className="social-media">
            <a href="mailto:andreea1bolea@gmail.com">Email Me!</a>
          </ul>
        </div>
        <p>Created May 2021 by Andreea Bolea</p>
      </footer>
    );
  }
}

export default Footer;
