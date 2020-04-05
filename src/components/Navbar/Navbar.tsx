import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/deployment.svg";
import Github from "../../assets/github.svg";
import Twitter from "../../assets/twitter.svg";
import "animate.css";
import GithubLogo from "./assets/GithubLogo";
import TwitterLogo from "./assets/TwitterLogo";

export interface INavP {
  isDark: boolean;
  isSmall: boolean;
  active: string;
}

const Navbar: (props: INavP) => JSX.Element = (props: INavP) => {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    setPathname(window.location.pathname);
    return () => {};
  }, [window.location.pathname]);

  return (
    <main
      id="navbar"
      className={`animated fadeInDown`}
    >
      <section id="logo">
        <img src={Logo} alt="logo" />
        <h2>Victor Campos Portfolio</h2>
      </section>
      <section id="links">
        <p
          className={`${
           pathname === "/#home" || props.active === 'home' ? "active" : ""
          } ${props.isDark ? "dark" : ""}`}
        >
          Home
        </p>
        <p
          className={`${pathname === "/#about" || props.active === 'about' ? "active" : ""} ${
            props.isDark ? "dark" : ""
          }`}
        >
          About
        </p>
        <p
          className={`${pathname === "/portfolio" || props.active === 'portfolio' ? "active" : ""} ${
            props.isDark ? "dark" : ""
          }`}
        >
          Portfolio
        </p>
        <p
          className={`${pathname === "/contact" || props.active === 'contact' ? "active" : ""} ${
            props.isDark ? "dark" : ""
          }`}
        >
          Contact
        </p>
        <p
          className={`${pathname === "/blog" || props.active === 'blog' ? "active" : ""} ${
            props.isDark ? "dark" : ""
          }`}
        >
          Blog
        </p>
      </section>
      <section id="socials">
        <a href="https://github.com/camvaz">
          <GithubLogo fill={props.isDark ? "#f2f2f2" : "#393e46"} />
        </a>
        <a href="https://twitter.com/camvazz">
          <TwitterLogo fill={props.isDark ? "#f2f2f2" : "#393e46"} />
        </a>
      </section>
    </main>
  );
};

export default Navbar;
