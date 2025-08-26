import ImageSwitch from "./assets/Switch.svg";
import ImgProfile from "./assets/img-profile.png";
import "./style.css";

export default function Header () {
  return (
    <header className="Profile-header">
      <img className="img-profile" src={ImgProfile} alt="Foto de Perfil" />
      <span>Marcelo Saldanha</span>
      <button>
        <img src={ImageSwitch} alt="Botão Dark Mode"/>
      </button>
    </header>
  )
}