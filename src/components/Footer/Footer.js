import React, { Component } from "react";
class Footer extends Component {
  render() {
    let cvData = this.props.cvData;
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-media">
              {cvData.socialmedia &&
                cvData.socialmedia.map((item) => {
                  return (
                    <li>
                      <a href={item.url}>
                        <i className={item.className}></i>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
