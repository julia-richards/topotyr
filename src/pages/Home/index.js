import React from "react";
import { ReactComponent as RouteOutline } from "./RouteOutline.svg";
import "./Home.css";

function Home() {
  return (
    <React.Fragment>
      <div className="title-wrapper">
        <h1>topotyr</h1>
        <h4>Maps for avid humans and average adventurers.</h4>
      </div>
      <RouteOutline className="RouteOutline" />
    </React.Fragment>
  );
}
export default Home;
