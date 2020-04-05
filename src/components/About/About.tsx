import React, { useState, useEffect } from "react";
import "./About.scss";
import { WSAEHOSTDOWN } from "constants";

const About: () => JSX.Element = () => {
  const [aboutX, setAboutX] = useState(250);
  const [title, setTitle] = useState("");
  const [tempWord, setTemp] = useState("");
  const word = "About me.";
  let flag = true;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll("about-title");
    });
    return () => {
      window.removeEventListener("scroll", () => {
        handleScroll("about-title");
      });
    };
  }, []);

  const genTitle: () => void = () => {
      if(flag){
          let tit = "";
          const numwords = 50;
          word.split("").map((data, index) => {
            for (let i = 0; i <= numwords;  i++) {
              setTimeout(() => {
                if(i !== numwords){
                    setTemp(String.fromCharCode(Math.round(Math.random() * 100)));
                } else {
                    tit+=data;
                    setTitle(tit+data);
                    setTemp("");
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
            flag=false;
            
          }
          if (refAbout) setAboutX(0);
          // else if(ref.bottom <= 0){
          //     setAboutX(-50);
          // }
          else setAboutX(250);
          break;
      }
    }
  };
  return (
    <main id="about" style={{ transform: `translateY(${aboutX}px)` }}>
      <div className="title" id="about-title">
        <h1>
          {title.slice(0,-1)}
          {tempWord}
        </h1>
      </div>
      <div className="content"></div>
    </main>
  );
};

export default About;
