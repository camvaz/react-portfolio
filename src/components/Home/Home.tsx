import React, { useEffect, useState } from "react";
import WebDev from "../../assets/undraw-webdev.png";
import WebDevMobile from "../../assets/undraw-webdev-mobile.png";

import "./Home.scss";
import "animate.css";

import { Mobile, Desktop } from "../Responsive/Responsive";
import About from "../About/About";
import LinkNavigator from "../LinkNavigator/LinkNavigator";

import { INavP } from "../Navbar/Navbar";
import { homedir } from "os";

export interface IHomeP {
  setNavbar: (props: INavP) => void;
}

const Home: (props: IHomeP) => JSX.Element = (props: IHomeP) => {
  const [linkNav, setLinkNav] = useState({ isDark: false, active: "home" });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll("about");
    });
    return () => {
      window.removeEventListener("scroll", () => {
        handleScroll("about");
      });
    };
  }, []);

  const handleScroll: (element: string) => void = (element: string) => {
    const ref = document.getElementById(element)?.getBoundingClientRect();
    if (ref) {
      switch (element) {
        case "about":
          const insideAboutSmall = ref.top <= ref.height / 4 && ref.bottom >= 0;
          const insideAboutFull =  ref.top <= 0 && ref.bottom >= 0;
          const insideHalf = ref.top <= ref.height / 2 && ref.bottom >= ref.height / 2;
          
          setLinkNav({
            isDark: insideHalf,
            active: insideHalf ? "about" : "home",
          });
          props.setNavbar({
            isDark: insideAboutFull,
            isSmall: insideAboutSmall,
            active: insideAboutFull ? 'about' : 'home'
          });
          
          break;
      }
    }
  };

  return (
    <main id="home">
      <LinkNavigator isDark={linkNav.isDark} active={linkNav.active} />
      <section id="intro">
        <div className="intro-text">
          <h1 className="title animated fadeInUp">Aesthetic and powerful digital solutions.</h1>
          <p className="animated fadeInUp">
            Hello there! I'm a programming enthusiast that enjoys creating
            beautiful web applications. Some of the work I've done includes:
          </p>
          <ul className="animated fadeInUp delay-1s">
            <li>UI/UX</li>
            <li>Frontend development</li>
            <li>Backend development</li>
            <li>Dev Ops</li>
          </ul>
          <p className="last animated fadeInUp delay-2s">
            Are you ready to take your web application to the next level?
            <br />
            Let's build something special and unique!
          </p>
          <div className="btn-container">
            <button className="naranja animated fadeIn delay-1s">
              See portfolio
            </button>
            <button className="gris animated fadeIn delay-2s">
              Contact me 👋`
            </button>
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
export default Home;
