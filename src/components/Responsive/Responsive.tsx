import React, { useState, useEffect } from "react";

interface IResP{
    children:JSX.Element
}

export const Mobile: (props:IResP) => JSX.Element | null = (props:IResP) => {
  const [width, setWidth] = useState(window.innerWidth);
  const widthListener = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", widthListener);
    return () => {
      window.removeEventListener("resize", widthListener);
    };
  }, []);
  
  return width < 768 ? props.children : null;
};

export const Desktop: (props: IResP) => JSX.Element | null = (props:IResP) => {
  const [width, setWidth] = useState(window.innerWidth);
  const widthListener = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", widthListener);
    return () => {
      window.removeEventListener("resize", widthListener);
    };
  }, []);
  
  return width >= 768 ? props.children : null;
}