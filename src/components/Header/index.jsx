import { Link } from "react-router-dom"
import Logo from "../../assets/LOGO.png"

function Header() {
  return (
    <div>
      <img src={Logo} alt="Logo Kasa" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/A_Propos">A Propos</Link>
      </nav>
    </div>
  )
}

export default Header
