import React from "react";
import "./LinkNavigator.scss";

export interface ILNP {
  color: string;
  active: string;
}

const LinkNavigator: (props: ILNP) => JSX.Element = (props: ILNP) => {
  return (
    <main id="link-navigator">
      <section id="nav-links">
        <div className="nav-link">
          <div
            className={`link-bar ${props.color} ${
              props.active === "home" ? "active" : ""
            }`}
          ></div>
          <p
            className={`${props.color} ${
              props.active === "home" ? "" : "inactive"
            }`}
          >
            Home
          </p>
        </div>
        <div className="nav-link">
          <div
            className={`link-bar ${props.color} ${
              props.active === "about" ? "active" : ""
            }`}
          ></div>
          <p
            className={`${props.color} ${
              props.active === "about" ? "" : "inactive"
            }`}
          >
            Services
          </p>
        </div>
        <div className="nav-link">
          <div
            className={`link-bar ${props.color} ${
              props.active === "portfolio" ? "active" : ""
            }`}
          ></div>
          <p
            className={`${props.color} ${
              props.active === "portfolio" ? "" : "inactive"
            }`}
          >
            Porfolio
          </p>
        </div>
        <div className="nav-link">
          <div
            className={`link-bar ${props.color} ${
              props.active === "contact" ? "active" : ""
            }`}
          ></div>
          <p
            className={`${props.color} ${
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
