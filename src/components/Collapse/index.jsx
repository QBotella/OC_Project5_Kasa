import { useState } from "react"

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <button className="collapse__btn" onClick={toggleCollapse}>
        {title}
        <img
          className={`collapse__icon ${isOpen ? "open" : ""}`}
          src="src/assets/img/arrow_back.png"
          alt="Arrow"
        ></img>
      </button>
      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  )
}

export default Collapse
