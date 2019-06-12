import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <main>
      <div className="title-wrapper">
        <h1>topotyr</h1>
        <h4>Maps for avid humans and average adventurers.</h4>
      </div>
      <iframe
        width="100%"
        height="520"
        frameborder="0"
        src="https://juliarichards.carto.com/builder/eae64ec7-73c2-4eb6-af44-90cf5d7c50a3/embed"
      />
    </main>
  );
}

export default App;
