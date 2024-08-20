import React from "react";
import { Style } from "./style";

const Button = ({ value, bg, anime, loader }) => {
  const nameMaker = () => {
    const key = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "i", "I", "1", "2", "3", "4", "5", "6", "7"];
    return `${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}${key[parseInt(Math.random() * 23)]}`
  }
  
  const name = nameMaker();

  const click = ({ layerX: x, layerY: y }) => {
    let span = document.createElement("span");
    span.style.left = x + "px";
    span.style.top = y + "px";
    document.getElementById(name).append(span);
    setInterval(() => {
      span.remove();
    }, 450);
  };

  return (
    <Style className={`${bg} ${anime}`} onClick={(e) => click(e.nativeEvent)} id={name}>
      {
        loader === true ? <div className="spinner"></div> : ""
      }
      {value}
    </Style>
  );
};

export default Button;
