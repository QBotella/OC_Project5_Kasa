import { Link, useLocation } from "react-router-dom"
import Logo from "../../assets/img/LOGO.png"

function Header() {
  const location = useLocation()

  // Fonction pour vérifier si le lien est actif
  const isActive = (path) => location.pathname === path

  return (
    <nav className="header">
      <img className="header__logo" src={Logo} alt="Logo Kasa" />
      <ul className="header__ul">
        <li className={`header__link ${isActive("/") ? "active" : ""}`}>
          <Link to="/">Accueil</Link>
        </li>
        <li className={`header__link ${isActive("/A_Propos") ? "active" : ""}`}>
          <Link to="/A_Propos">A Propos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
