import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/deployment.svg";
import Github from "../../assets/github.svg";
import Twitter from "../../assets/twitter.svg";
export const Navbar: () => JSX.Element = () => {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    setPathname(window.location.pathname);
    return () => {};
  }, [window.location.pathname]);
  
  return (
    <main id="navbar">
      <section id="logo">
        <img src={Logo} alt="logo" />
        <h2>Victor Campos Portfolio</h2>
      </section>
      <section id="links">
        <p className={`${pathname === "/" ? "active" : ""}`}>Home</p>
        <p>About</p>
        <p>Portfolio</p>
        <p>CV</p>
      </section>
      <section id="socials">
        <a href="https://github.com/camvaz">
          <img src={Github} alt="Github logo" />
        </a>
        <a href="https://twitter.com/camvazz">
          <img src={Twitter} alt="Twitter logo" />
        </a>
      </section>
    </main>
  );
};
