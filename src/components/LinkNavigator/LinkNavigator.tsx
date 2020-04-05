import React from "react";
import "./LinkNavigator.scss";

export interface ILNP {
  isDark: boolean;
  active: string;
}

const LinkNavigator: (props: ILNP) => JSX.Element = (props: ILNP) => {
  return (
    <main id="link-navigator">
      <section id="nav-links">
        <div className="nav-link">
          <div
            className={`link-bar ${props.isDark ? "dark" : "light"} ${
              props.active === "home" ? "active" : ""
            }`}
          ></div>
          <p
            className={`${props.isDark ? "dark" : ""} ${
              props.active === "home" ? "" : "inactive"
            }`}
          >
            Home
          </p>
        </div>
        <div className="nav-link">
          <div
            className={`link-bar ${props.isDark ? "dark" : "light"} ${
              props.active === "about" ? "active" : ""
            }`}
          ></div>
          <p
            className={`${props.isDark ? "dark" : ""} ${
              props.active === "about" ? "" : "inactive"
            }`}
          >
            About
          </p>
        </div>
        <div className="nav-link">
          <div
            className={`link-bar ${props.isDark ? "dark" : "light"} ${
              props.active === "portfolio" ? "active" : ""
            }`}
          ></div>
          <p
            className={`${props.isDark ? "dark" : ""} ${
              props.active === "portfolio" ? "" : "inactive"
            }`}
          >
            Porfolio
          </p>
        </div>
        <div className="nav-link">
          <div
            className={`link-bar ${props.isDark ? "dark" : "light"} ${
              props.active === "contact" ? "active" : ""
            }`}
          ></div>
          <p
            className={`${props.isDark ? "dark" : ""} ${
              props.active === "contact" ? "" : "inactive"
            }`}
          >
            Contact
          </p>
        </div>
      </section>
    </main>
  );
};

export default LinkNavigator;
