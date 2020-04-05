import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
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
      handleScroll("intro");
    });
    return () => {
      window.removeEventListener("scroll", () => {
        handleScroll("about");
        handleScroll("intro");
      });
    };
  }, []);

  const handleScroll: (element: string) => void = (element: string) => {
    const ref = document.getElementById(element)?.getBoundingClientRect();
    if (ref) {
      switch (element) {
        case "intro":
          console.log(ref.top + " " + ref.bottom);
          if (ref.top <= -1 && ref.bottom >= -1) {
            props.setNavbar({ isDark: false, isSmall: true, active: "home" });
          }
          if (ref.top === 0)
            props.setNavbar({ isDark: false, isSmall: false, active: "home" });
          break;
        case "about":
          const insideAboutSmall = ref.top <= ref.height / 4 && ref.bottom >= 0;
          const insideAboutFull = ref.top <= 0 && ref.bottom >= 0;
          const insideHalf =
            ref.top <= ref.height / 2 && ref.bottom >= ref.height / 2;

          setLinkNav({
            isDark: insideHalf,
            active: insideHalf ? "about" : "home",
          });
          props.setNavbar({
            isDark: insideAboutFull,
            isSmall: true,
            active: insideAboutFull ? "about" : "home",
          });

          break;
      }
    }
  };

  return (
    <main id="home">
      <Helmet>
        <link rel="canonical" href="https://vics.ml" />
        <meta
          name="description"
          content="Aesthetic and powerful digital solutions by Victor Campos."
        />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="General" />
        <meta name="location" content="México" />
        <meta
          name="classification"
          content="Web development | Digital design | Mobile Apps"
        />
      </Helmet>
      <LinkNavigator isDark={linkNav.isDark} active={linkNav.active} />
      <section id="intro">
        <div className="intro-text">
          <h1 className="title animated fadeInUp">
            Aesthetic and powerful digital solutions.
          </h1>
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
              Contact me 👋
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
      <section>
        <h1>aef</h1>
      </section>
    </main>
  );
};
export default Home;
