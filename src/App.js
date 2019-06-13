import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import BurgerMenu from "./BurgerMenu";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Maps = lazy(() => import("./pages/Maps"));

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
            <Route path="/maps/" component={Maps} />
          </Switch>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
