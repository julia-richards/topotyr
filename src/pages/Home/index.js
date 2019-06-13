import React from "react";
import { ReactComponent as RouteOutline } from "./RouteOutline.svg";

function Home() {
  return (
    <React.Fragment>
      <div className="title-wrapper">
        <h1>topotyr</h1>
        <h4>Maps for avid humans and average adventurers.</h4>
      </div>
      <RouteOutline
        style={{
          maxWidth: "45%",
          position: "absolute",
          bottom: 0,
          right: "15%"
        }}
      />
    </React.Fragment>
  );
}
export default Home;
