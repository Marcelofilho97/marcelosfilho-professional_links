import ImgGitHub from "./assets/logo-github.svg";
import ImgInstagram from "./assets/logo-instagram.svg";
import ImgLinkedIn from "./assets/logo-linkedin.svg";

import "./style.css";

export default function Profile() {

  return (
    <>
      <main>
        <ul className="links-list">
          <li className="link-item" id="item">
            <a href="#" target="_blank" rel="noopener noreferrer"> Instagram </a>
          </li>
          <li className="link-item" id="item">
            <a href="#" target="_blank" rel="noopener noreferrer"> GitHub </a>
          </li>
          <li className="link-item" id="item">
            <a href="#" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
          </li>
          <li className="link-item" id="item">
            <a href="#" target="_blank" rel="noopener noreferrer"> Fundador da YellowBag</a>
          </li>
        </ul>
        <ul className="social-media">
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={ImgGitHub} alt="Logo GitHub" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={ImgInstagram} alt="Logo Instagram" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={ImgLinkedIn} alt="Logo LinkeDin" />
            </a>
          </li>
        </ul>
      </main>
      <footer>
        <span>“Coragem!” - Pde. Carlo Paris</span>
      </footer>
    </>
  )
}


