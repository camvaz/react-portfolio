import React, { Suspense, useState, useEffect } from "react";
import { Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import { createBrowserHistory } from "history";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { INavP } from "./components/Navbar/Navbar";
import "./App.scss";

const App: () => JSX.Element = () => {
  const customHistory = createBrowserHistory();
  const [nav, setNav] = useState({ isDark: false, isSmall: false, active: 'home' });
  

  useEffect(() => {
    return () => {};
  }, []);

  const switchNavbarColor: (props: INavP) => void = (props: INavP) => {
    setNav(props);
  };

  return (
    <Router history={customHistory}>
      <Suspense fallback={<div>ke</div>}>
        <Navbar isDark={nav.isDark} isSmall={nav.isSmall} active={nav.active} />
        <ScrollToTop>
          <Switch>
            <Route path="/" exact>
              <Home setNavbar={switchNavbarColor}/>
            </Route>
          </Switch>
        </ScrollToTop>
      </Suspense>
    </Router>
  );
};

export default App;
