import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Mobile, Desktop } from "../Responsive/Responsive";
import WebDev from "../../assets/undraw-webdev.png";
import "./Home.scss";
import "animate.css";

export const Home: () => JSX.Element = () => {

  useEffect(() => {
    return () => {};
  }, []);
  
  return (
    <main id="home">
      <Navbar />
      <section id="intro">
        <div className="intro-text animated fadeIn">
          <h1>
            Delivering clean and modern
            <br />
            digital experiences through
            <br />
            web technologies.
          </h1>
          <div className="btn-container">
            <button className="naranja">See portfolio</button>
            <button className="gris">Go to CV</button>
          </div>
        </div>
        <div className="image-container">
          <Desktop>
            <img src={WebDev} alt="Web developer" className={"animate"} />
          </Desktop>
        </div>
      </section>
    </main>
  );
};
