import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import WebDev from "../../assets/undraw-webdev.png";
import WebDevMobile from "../../assets/undraw-webdev-mobile.png";
import Waving from "../../assets/waving.png";
import "./Home.scss";
import "animate.css";

import { Mobile, Desktop } from "../Responsive/Responsive";
import About from "../About/About";
import LinkNavigator from "../LinkNavigator/LinkNavigator";

import { INavP } from "../Navbar/Navbar";
import { homedir } from "os";
import Portfolio from "../Portfolio/Portfolio";

export interface IHomeP {
  setNavbar: (props: INavP) => void;
}

const Home: (props: IHomeP) => JSX.Element = (props: IHomeP) => {
  const [linkNav, setLinkNav] = useState({ color: "light", active: "home" });

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
          if (ref.top <= 90 && ref.bottom >= 70) {
            props.setNavbar({ isDark: false, isSmall: true, active: "home" });
          }
          if (ref.top === 0)
            props.setNavbar({ isDark: false, isSmall: false, active: "home" });
            if(ref.top <=0 && ref.bottom >= ref.height/2){
              setLinkNav({color:'light',active:'home'});
            }
          break;
        case "about":
          const insideAboutFull = ref.top <= 280  ;
          const insideHalf =
            ref.top <= 0 && ref.bottom >= ref.height / 2;

          setLinkNav({
            color: "naranja",
            active: "about"
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
      <LinkNavigator color={linkNav.color} active={linkNav.active} />
      <section id="intro">
        <div className="intro-text">
          <h1 className="title animated fadeInUp">
            Aesthetic and powerful<br/>digital solutions.
          </h1>
          <h2 className="animated fadeInUp">
            Delivering beautifully designed products<br/>through the world wide web.
          </h2>
          <div className="btn-container">
            <button className="naranja animated fadeIn delay-1s">
              See portfolio
            </button>
            <button className="gris animated fadeIn delay-2s">
              Contact me <img src={Waving} alt="waving"/>
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
      <Portfolio/>
    </main>
  );
};
export default Home;
