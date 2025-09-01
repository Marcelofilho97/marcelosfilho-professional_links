import ImgGitHub from "./assets/logo-github.svg";
import ImgInstagram from "./assets/logo-instagram.svg";
import ImgLinkedIn from "./assets/logo-linkedin.svg";

import "./style.css";

export default function Profile({mode}) {
  const element = ["Instagram", "GitHub", "LinkedIn", "Fundador da YellowBag"];
  const color = mode ? 'var(--orange)' : 'var(--purple)';

  return (
    <>
      <main>
        <ul
        className="links-list"
        >
          {
            element.map((item, index) => {
              return (
                <li
                  key={index}
                  className="link-item"
                  style={{background: color}}
                >
                  <a href="#"  target="_blank" rel="noopener noreferrer">
                    {item}
                  </a>
                </li>
              )
            })
          }
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

