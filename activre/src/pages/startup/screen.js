import React from "react";
import "./startup.css";

class Startup extends React.Component {
  render() {
    return (
      <div className="startup-container">
        <div className="startup-header">
          <p>activRE</p>
        </div>
        <div className="startup-body">
          <div className="description">
            <p>
              Active Recall Studying Technique will help you remember discrete
              facts and information in no time. Try it out now! Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
          <div className="login-button">
            <a className="button">Login</a>
          </div>
          <div className="signup-button">
            <a className="button">Sign Up</a>
          </div>
        </div>
        <div className="startup-footer">
          <p>
            <b>created by:</b> charlesc18 on 05/10/2020
          </p>
        </div>
      </div>
    );
  }
}

export default Startup;
