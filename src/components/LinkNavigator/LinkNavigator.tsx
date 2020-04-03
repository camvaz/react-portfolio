import React from "react";
import "./LinkNavigator.scss";

export const LinkNavigator: () => JSX.Element = () => {
  return (
    <main id="link-navigator">
      <section id="nav-links">
        <div
          className="nav-link"
          style={{ background: "#f96d00", border: "solid #f96d00 1px" }}
        ></div>
        <div className="nav-link" style={{ background: "#222831" }}></div>
        <div className="nav-link" style={{ background: "#222831" }}></div>
        <div className="nav-link" style={{ background: "#222831" }}></div>
      </section>
    </main>
  );
};
