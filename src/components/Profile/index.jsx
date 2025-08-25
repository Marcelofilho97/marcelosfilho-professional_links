import ImgProfile from "./assets/img-profile.png"; // profile image
import ImageSwitch from "./assets/Switch.png";
import "./style.css";

export default function Profile() {
  return (
    <div>
      <header className="Profile-header">
        <img className="img-profile" src={ImgProfile} alt="Foto de Perfil" />
        <span>Marcelo Saldanha</span>
        <img className="swicth-button" src={ImageSwitch} alt="Botão Dark Mode"/>
      </header>
      <main>
        <ul className="links-list">
          <li className="link-item">
            <a href="#" target="_blank" rel="noopener noreferrer"> Instagram </a>
          </li>
          <li className="link-item">
            <a href="#" target="_blank" rel="noopener noreferrer"> GitHub </a>
          </li>
          <li className="link-item">
            <a href="#" target="_blank" rel="noopener noreferrer"> LikedIn </a>
          </li>
          <li className="link-item">
            <a href="#" target="_blank" rel="noopener noreferrer"> Fundador da YellowBag</a>
          </li>
        </ul>
      </main>
    </div>
  )
}


