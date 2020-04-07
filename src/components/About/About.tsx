import React, { useState, useEffect } from "react";
import "./About.scss";
import DesignService from "../../assets/design-service.svg";
import ProgrammingService from "../../assets/programming-service.svg";
import DeployService from "../../assets/deploy-service.svg";
import Ecommerce from "../../assets/cart.svg";

const About: () => JSX.Element = () => {
  const [aboutX, setAboutX] = useState(250);
  const [showService, setService] = useState(false);
  const [title, setTitle] = useState("");
  const [tempWord, setTemp] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [subtempWord, setSubTemp] = useState("");
  const word = "Services";
  const subword = "Quality built."
  let flag = true;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll("about-title");
      handleScroll("service-flex");
    });
    return () => {
      window.removeEventListener("scroll", () => {
        handleScroll("about-title");
      handleScroll("service-flex");
      });
    };
  }, []);

  const genTitle: () => void = () => {
    if (flag) {
      let tit = "";
      let subtit="";
      const numwords = 100;
      word.split("").map((data, index) => {
        for (let i = 0; i <= numwords; i++) {
          setTimeout(() => {
            if (i !== numwords) {
              setTemp(String.fromCharCode(Math.round(Math.random() * 100)));
            } else {
              tit += data;
              setTitle(tit + data);
              setTemp("");
            }
          }, 500);
        }
      });
      subword.split("").map((data, index) => {
        for (let i = 0; i <= numwords; i++) {
          setTimeout(() => {
            if (i !== numwords) {
              setSubTemp(String.fromCharCode(Math.round(Math.random() * 100)));
            } else {
              subtit += data;
              setSubTitle(subtit + data);
              setSubTemp("");
            }
          }, 500);
        }
      });
    }
  };

  const handleScroll: (element: string) => void = (element: string) => {
    const ref = document.getElementById(element)?.getBoundingClientRect();
    if (ref) {
      switch (element) {
        case "about-title":
          const refAbout = ref.top <= window.innerHeight * 0.999;
          const refHalf = ref.top <= window.innerHeight;
          if (refHalf) {
            // flag=true;
            genTitle();
            flag = false;
          }
          if (refAbout) setAboutX(0);
          // else if(ref.bottom <= 0){
          //     setAboutX(-50);
          // }
          else setAboutX(250);
          break;
          
          case "service-flex":
            console.log(ref.top)
            const refFlex = ref.top <= ref.height*2;
            setService(refFlex);
      }
    }
  };
  return (
    <main id="about" style={{ transform: `translateY(${aboutX}px)` }}>
      <div className="title" id="about-title">
        <h1>
          {title.slice(0, -1)}
          {tempWord}
        </h1>
        <h2>
          {subtitle.slice(0, -1)}
          {subtempWord}
          </h2>
      </div>
      <div id="service-flex" className={`service-flex ${showService ? 'show' : ''}`}>
        <div className="service">
          <img src={DesignService} alt="Design service" />
          <h3>Design</h3>
          <p>UI/UX</p>
          <p>Prototyping</p>
          <p>Latest trends</p>
        </div>
        <div className="service">
          <img src={ProgrammingService} alt="Design service" />
          <h3>Development</h3>
          <p>High performance</p>
          <p>Modern technologies</p>
          <p>Design Standards</p>
        </div>
        <div className="service">
          <img src={DeployService} alt="Design service" />
          <h3>Deployment</h3>
          <p>Hosting</p>
          <p>SSL</p>
          <p>Database</p>
        </div>
        <div className="service">
          <img src={Ecommerce} alt="Design service" />
          <h3>Ecommerce</h3>
          <p>Online payments</p>
          <p>Secure</p>
          <p>Stripe API</p>
        </div>
      </div>
      {/* <div className="content">
        <div className="img"></div>
        <div className="content-text">
          <div className="left">
            <ul>
              <li>
              My name is Víctor Manuel Campos Vázquez, I'm from Veracruz, Mexico
              and I'm 22 years old.
              </li>
              <li>
                I started my career in tech in 2019 when I joined Headtag Mx as a
                Jr. Developer.
              </li>
              <li>
                My main interest are Web and Mobile Development, UI / UX and Dev Ops.
              </li>
              <li>
                My favorite programming languages are Python, TypeScript and Scala.
              </li>
            </ul>
          </div>
          <div className="right">
            <h2>Technologies I'm experienced with:</h2>
            <ul>
              <li>Node Js/Express</li>
              <li>Laravel</li>
              <li>Flask</li>
              <li>Play</li>
              <li>GraphQL</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>React Js / Native</li>
              <li>Angular</li>
            </ul>
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default About;
