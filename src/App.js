import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import { scaleDown as Menu } from "react-burger-menu";

function Home() {
  return (
    <React.Fragment>
      <div className="title-wrapper">
        <h1>topotyr</h1>
        <h4>Maps for avid humans and average adventurers.</h4>
      </div>
      <iframe
        width="100%"
        height="520"
        frameBorder="0"
        src="https://juliarichards.carto.com/builder/eae64ec7-73c2-4eb6-af44-90cf5d7c50a3/embed"
      />
    </React.Fragment>
  );
}

function About() {
  return <h2>About</h2>;
}

function Maps() {
  return <h2>Maps</h2>;
}
const BurgerIcon = _ => (
  <svg className="burger-icon" viewBox="0 0 32 32">
    <rect x="2" y="4" width="28" height="4" />
    <rect x="2" y="14" width="28" height="4" />
    <rect x="2" y="24" width="22" height="4" />
  </svg>
);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="App">
      <Menu
        customBurgerIcon={<BurgerIcon />}
        outerContainerId="App"
        pageWrapId="page-wrap"
        isOpen={menuOpen}
        onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
      >
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about/" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="/maps/" onClick={() => setMenuOpen(false)}>
          Maps
        </Link>
      </Menu>
      <main id="page-wrap">
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/maps/" component={Maps} />
      </main>
    </div>
  );
}

export default App;
