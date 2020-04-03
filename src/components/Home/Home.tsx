import React, { useEffect, useState } from "react";
import { Mobile, Desktop } from "../Responsive/Responsive";
import WebDev from "../../assets/undraw-webdev.png";
import WebDevMobile from "../../assets/undraw-webdev-mobile.png";
import "./Home.scss";
import "animate.css";
import { LinkNavigator } from "../LinkNavigator/LinkNavigator";
import { About } from "../About/About";
import { Navbar } from "../Navbar/Navbar";

export const Home: () => JSX.Element = () => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <main id="home">
      <LinkNavigator />
      <section id="intro">
        <div className="intro-text animated fadeIn">
          <h1>
            Delivering unique digital experiences through the web.
          </h1>
          <p>
            Hello there! I'm a programming enthusiast that enjoys creating beautiful web applications.
            Some of the work I've done includes:
          </p>
          <ul>
            <li>UI/UX</li>
            <li>Frontend development</li>
            <li>Backend development</li>
            <li>Dev Ops</li>
          </ul>
          <p className='last'>
            Are you ready to take your web application to the next level?<br/>Let's build something special and unique!
          </p>
          <div className="btn-container">
            <button className="naranja animated fadeIn delay-1s">See portfolio</button>
            <button className="gris animated fadeIn delay-2s">Contact me</button>
          </div>
        </div>
        <div className="image-container">
          <Desktop>
            <img src={WebDev} alt="Web developer" className={"animate"} />
          </Desktop>
          <Mobile>
            <img src={WebDevMobile} alt="Web developer" className={"animate"} />
          </Mobile>
        </div>
      </section>
      <About />
    </main>
  );
};
