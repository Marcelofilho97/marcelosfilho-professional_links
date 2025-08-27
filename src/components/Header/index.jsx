import { useEffect, useState } from "react";
import ImageSwitch from "./assets/Switch.svg";
import ImgProfile from "./assets/img-profile.png";
import "./style.css";

export default function Header () {

  const darkmode = {
    background: "--bg-variant02",
    status: 1,
  }
  const lightmode = {
    background: "--bg-variant01", 
    status: 0,
  }
  const myimage = document.getElementsByClassName('.modeImage');
  const [Mode, setMode] = useState([]);
  let currentMode = Mode.status;
  console.log(currentMode);

  return (
    <header className="Profile-header">
      <img className="img-profile" src={ImgProfile} alt="Foto de Perfil" />
      <span>Marcelo Saldanha</span>
      <button onClick={(currentMode) => {
        currentMode = Mode.status === 0 ? setMode(darkmode) : setMode(lightmode);

        /*
        <img 
        className="modeImage" 
        src={ImageSwitch} 
        alt="Botão Dark Mode"/>
        */
      } }className="btn-switch">
      </button>
    </header>
  )
}

