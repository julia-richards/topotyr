import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import BurgerMenu from "./BurgerMenu";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Maps = lazy(() => import("./pages/Maps"));
const SilvertonTrails = lazy(() => import("./pages/SilvertonTrails"));

function App() {
  return (
    <div id="App">
      <BurgerMenu />
      <main id="page-wrap">
        <Suspense
          fallback={
            <p
              style={{
                position: "absolute",
                top: 6,
                left: 0,
                right: 0,
                color: "#fff"
              }}
            >
              ...
            </p>
          }
        >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route exact path="/maps/" component={Maps} />
            <Route
              exact
              path="/maps/silverton_trails/:slug?"
              component={SilvertonTrails}
            />
          </Switch>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
