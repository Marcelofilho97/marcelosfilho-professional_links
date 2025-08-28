import { useEffect, useState } from "react";
import ImageSwitch from "./assets/Switch.svg";
import ImgProfile from "./assets/img-profile.png";
import "./style.css";

export default function Header () {  
  const [Mode, setMode] = useState(false);
  let currentMode = Mode;

  return (
    <header className="Profile-header">
      <img className="img-profile" src={ImgProfile} alt="Foto de Perfil" />
      <span>Marcelo Saldanha</span>
      <button
        onClick={() => {
          currentMode ? currentMode = setMode(false) : currentMode = setMode(true);
        }}
        className="btn-switch">
        <img 
          className="modeImage" 
          src={ImageSwitch}
          style={ currentMode ? {
            filter: 'invert(1)',
            transform: 'scaleX(-1)'
          }: {
            filter: 'invert(0)',
            transform: 'scaleX(1)'
          } }
          alt="Botão Dark Mode"/>
      </button>
    </header>
  )
}

/*
  onClick= {
        // setMode(true);
        //(currentMode) => {
        //currentMode = Mode.status === 0 ? setMode(darkmode) : setMode(lightmode);
        // criação do elemento imagem;
        
        //const myImage = document.createElement('img');
        //if (currentMode === false) {
          //setMode(lightmode);
          //const myImage = document.createElement('img');
          //myImage.src = ImageSwitch;
          //myImage.className = 'modeImage';
          //myImage.style.setProperty('filter', 'invert(0)');
          //console.log("funfou");
        //} else {
          //setMode(darkmode);
          //myImage.style.setProperty('filter', 'invert(0)');
        //}
        /*
        <img 
        className="modeImage" 
        src={ImageSwitch} 
        alt="Botão Dark Mode"/>
     }
     */
