import React from "react";
import "./About.css";

function About() {
  return (
    <React.Fragment>
      <div className="title-wrapper">
        <h2>About</h2>
      </div>
      <div className="About-card">
        <div className="text-wrap">
          <p>
            <strong>Mission</strong> topotyr makes maps for avid humans and
            average adventurers.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
