import Logo from "../../assets/img/logo_footer.png"

function Footer() {
  return (
    <div className="footer">
      <img src={Logo} alt="Logo Kasa"></img>
      <p>
        © 2020 Kasa. All <br />
        rights reserved
      </p>
    </div>
  )
}

export default Footer
