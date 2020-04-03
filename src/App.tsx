import React, { Suspense, useState, useEffect } from "react";
import { Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import { createBrowserHistory } from "history";
import "./App.scss";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";

const App: () => JSX.Element = () => {
  const customHistory = createBrowserHistory();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Router history={customHistory}>
      <Suspense fallback={<div>ke</div>}>
        <Navbar />
        <ScrollToTop>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </ScrollToTop>
      </Suspense>
    </Router>
  );
};

export default App;
