import { Link, useLocation } from "react-router-dom"
import Logo from "../../assets/img/logo_header.png"

function Header() {
  const location = useLocation()

  // Fonction pour vérifier si le lien est actif
  const isActive = (path) => location.pathname === path

  return (
    <nav className="header">
      <img className="header__logo" src={Logo} alt="Logo Kasa" />
      <ul>
        <li className={`header__link ${isActive("/") ? "active" : ""}`}>
          <Link to="/">Accueil</Link>
        </li>
        <li className={`header__link ${isActive("/a-propos") ? "active" : ""}`}>
          <Link to="/a-propos">A Propos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
